import apiConfig from "./apiConfig";
// import { fetch } from 'isomorphic-unfetch';
import Axios from "axios";

const generateYears = () => {
    let y = 2007
    const arr = Array.from(Array(15)).map(v => {
        return ++y;
    })
    return arr;
}

const fetchPodsData = async (filters, callback) => {
    const { year, launch, landing } = filters;
    const isLaunchSelected = typeof launch === 'boolean';
    const isLandingSelected = typeof landing === 'boolean';
    let url
    if (!year && !isLaunchSelected && !isLandingSelected) {
        url = apiConfig.GET_ALL_LAUNCHING_DATA();
    } else if (!year && isLaunchSelected && !isLandingSelected) {
        url = apiConfig.GET_LAUNCH_DATA(launch)
    } else if (!year && isLandingSelected) {
        url = apiConfig.GET_LANDING_DATA(landing)
    } else if (year && isLaunchSelected && !isLandingSelected) {
        url = apiConfig.GET_YEAR_AND_LAUNCH_DATA(year, launch)
    } else if (year && !isLaunchSelected && isLandingSelected) {
        url = apiConfig.GET_YEAR_AND_LAND_DATA(year, landing)
    } else {
        url = apiConfig.GET_ALL_FILTERS_DATA(year, launch, landing)
    }
    try {
        const response = await Axios.get(url);
        callback(response.data)
    } catch (e) {
        console.error(e);
        callback([])
    }
}
export { generateYears, fetchPodsData }