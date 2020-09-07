import { Fragment } from "react";
import PropTypes from 'prop-types';

import { withContext } from '../../utils/Context';
import { generateYears } from "../../utils/utils";
import style from './Filter.style';

const Filters = ({ store }) => {
    const { filterConfig: { filterData, setFilterData } } = store;

    const changeFilterConfig = (label, value) => () => {
        let tempValue = value;
        const { launch, landing } = filterData;
        const isLaunchSelected = typeof launch === 'boolean';
        const isLandingSelected = typeof landing === 'boolean';
        const config = {
            ...filterData
        }
        if (filterData[label] === value) {
            tempValue = null;
        }

        config[label] = tempValue;
        setFilterData(config)
    }
    return (
        <Fragment>
            <p className="filters">Filters</p>
            <div className="date-filter">
                <p className="filter-name-text">Launch Year</p>
                <div className="border-bottom" />
                <div className="date-btns">
                    {
                        generateYears().map(y => (
                            <div
                                key={y}
                                className="button-wrapper">
                                <button
                                    id={`year-btn-${y}`}
                                    className={filterData['year'] === y ? 'selected' : ''}
                                    onClick={changeFilterConfig('year', y)}
                                >{y}</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="launch-filter">
                <p className="filter-name-text">Successful Launch</p>
                <div className="border-bottom" />
                <div className="date-btns">
                    <div className="button-wrapper">
                        <button
                            className={filterData['launch'] === true ? 'selected' : ''}
                            onClick={changeFilterConfig('launch', true)}>True</button>
                    </div>
                    <div className="button-wrapper">
                        <button
                            className={filterData['launch'] === false ? 'selected' : ''}
                            onClick={changeFilterConfig('launch', false)}>False</button>
                    </div>
                </div>
            </div>
            <div className="landing-filter">
                <p className="filter-name-text">Successfull Landing</p>
                <div className="border-bottom" />
                <div className="date-btns">
                    <div className="button-wrapper">
                        <button
                            className={filterData['landing'] === true ? 'selected' : ''}
                            onClick={changeFilterConfig('landing', true)}>True</button>
                    </div>
                    <div className="button-wrapper">
                        <button
                            className={filterData['landing'] === false ? 'selected' : ''}
                            onClick={changeFilterConfig('landing', false)}>False</button>
                    </div>
                </div>
            </div>
            <style jsx>{style}</style>
        </Fragment>
    )
};

Filters.propTypes = {
    store: PropTypes.object.isRequired
}
export { Filters }
export default withContext(Filters)