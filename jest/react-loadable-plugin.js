module.exports = function({ types:t }) {
  return {
    visitor: {
      ImportDeclaration(path) {
        const source = path.node.source.value;
        if (source !== 'next/dynamic') return;

        const defaultSpecifier = path.get('specifiers').find((specifier) => {
          return specifier.isImportDefaultSpecifier();
        });

        if (!defaultSpecifier) return;

        const bindingName = defaultSpecifier.node.local.name;
        const binding = path.scope.getBinding(bindingName);

        if (!binding) {
          return;
        }

        binding.referencePaths.forEach((refPath) => {
          let callExpression = refPath.parentPath;

          if (
            callExpression.isMemberExpression() &&
            callExpression.node.computed === false
          ) {
            const property = callExpression.get('property');
            if (
              !Array.isArray(property) &&
              property.isIdentifier({ name: 'Map' })
            ) {
              callExpression = callExpression.parentPath;
            }
          }

          if (!callExpression.isCallExpression()) return;

          let args = callExpression.get('arguments');
          if (args.length > 2) {
            throw callExpression.buildCodeFrameError(
              'next/dynamic only accepts 2 arguments'
            );
          }

          if (!args[0]) {
            return;
          }

          let loader;
          let options;

          if (args[0].isObjectExpression()) {
            options = args[0];
          } else {
            if (!args[1]) {
              callExpression.node.arguments.push(t.objectExpression([]));
            }
            // This is needed as the code is modified above
            args = callExpression.get('arguments');
            loader = args[0];
            options = args[1];
          }

          if (!options.isObjectExpression()) return;

          const properties = options.get('properties');
          const propertiesMap = {};

          properties.forEach((property) => {
            const key = property.get('key');
            propertiesMap[key.node.name] = property;
          });

          if (propertiesMap.loadableGenerated) {
            return;
          }

          if (propertiesMap.loader) {
            loader = propertiesMap.loader.get('value');
          }

          if (propertiesMap.modules) {
            loader = propertiesMap.modules.get('value');
          }

          if (!loader || Array.isArray(loader)) {
            return;
          }
          const dynamicImports = [];

          loader.traverse({
            Import(path) {
              const args = path.parentPath.get('arguments');
              if (!Array.isArray(args)) return;
              const { node } = args[0];
              dynamicImports.push(node);
            }
          });

          if (!dynamicImports.length) return;

          options.node.properties.push(
            t.objectProperty(
              t.identifier('loadableGenerated'),
              t.objectExpression([
                t.objectProperty(
                  t.identifier('webpack'),
                  t.arrowFunctionExpression(
                    [],
                    t.arrayExpression(
                      dynamicImports.map((dynamicImport) => {
                        return t.callExpression(
                          t.memberExpression(
                            t.identifier('require'),
                            t.identifier('resolveWeak')
                          ),
                          [dynamicImport]
                        );
                      })
                    )
                  )
                ),
                t.objectProperty(
                  t.identifier('modules'),
                  t.arrayExpression(dynamicImports)
                )
              ])
            )
          );

          // Turns `dynamic(import('something'))` into `dynamic(() => import('something'))` for backwards compat.
          // This is the replicate the behavior in versions below Next.js 7 where we magically handled not executing the `import()` too.
          // We'll deprecate this behavior and provide a codemod for it in 7.1.
          if (loader.isCallExpression()) {
            const arrowFunction = t.arrowFunctionExpression([], loader.node);
            loader.replaceWith(arrowFunction);
          }
        });
      }
    }
  };
};
