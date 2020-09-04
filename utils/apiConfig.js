export default {
    GET_ALL_LAUNCHING_DATA: () => {
        return 'https://api.spacexdata.com/v3/launches?limit=100';
    },
    GET_LAUNCH_DATA: (value) => {
        return `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${value}`
    },
    GET_LANDING_DATA: (value) => {
        return `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=${value}`
    },
    GET_ALL_FILTERS_DATA: (year, launch = true, landing = true) => {
        return `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}&land_success=${landing}&launch_year=${year}`
    },
    GET_YEAR_AND_LAUNCH_DATA: (year, launch = true) => {
        return `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch}&launch_year=${year}`
    },
    GET_YEAR_AND_LAND_DATA: (year, landing = true) => {
        return `https://api.spaceXdata.com/v3/launches?limit=100&land_success=${landing}&launch_year=${year}`
    }
} 