import Context from '../utils/Context'
import Homepage from '../container/Homepage';
import apiConfig from '../utils/apiConfig';
import Axios from 'axios';
import PropTypes from 'prop-types';

const SpaceXProgram = ({ allLaunches }) => (
    <Context.Provider data={allLaunches}>
        <Homepage />
    </Context.Provider>
);

SpaceXProgram.getInitialProps = async () => {
    try {
        const response = await Axios.get(apiConfig.GET_ALL_LAUNCHING_DATA());
        return { allLaunches: response.data };
    } catch (e) {
        console.error(e);
        return { allLaunches: [] };
    }
}

SpaceXProgram.defaultProps = {
    allLaunches: []
}
SpaceXProgram.propTypes = {
    allLaunches: PropTypes.array
}
export default SpaceXProgram;