/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
const opn = require('opn');

opn('./coverage/index.html', { wait: false });
