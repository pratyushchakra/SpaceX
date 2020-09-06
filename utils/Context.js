import React, { useState, useContext, useEffect } from 'react';
import createContainer from 'constate';

const nameHOC = (Component, suffix = '') => {
  return `${Component.originalName ||
    Component.displayName ||
    Component.name ||
    'Component'}${suffix}`;
};

const formatData = (allLaunchesData = []) => {
  return allLaunchesData.map(v => {
    return {
      ...v,
      isLandingTrue: v.rocket.first_stage.cores[v.rocket.first_stage.cores.length - 1].land_success
    }
  })
}

function useUserContext({ data: initialData }) {
  const [allLaunchesData, setLaunchData] = useState(initialData);
  const [filterData, setFilterData] = useState({
    launch: null, landing: null, year: ''
  });
  return {
    launchConfig: {
      allLaunches: [
        ...formatData(allLaunchesData)
      ],
      setLaunchData
    },
    filterConfig: {
      filterData,
      setFilterData
    }
  }
}

const LaunchInfoContext = createContainer(useUserContext);

const withContext = (WrappedComponent) => {
  const ComponentWithData = (props) => {
    const store = useContext(LaunchInfoContext.Context);
    return <WrappedComponent {...props} store={store} />;
  };

  ComponentWithData.originalName = nameHOC(WrappedComponent);
  ComponentWithData.displayName = nameHOC(
    WrappedComponent
  );
  return ComponentWithData;
};

export default LaunchInfoContext;
export { withContext };
