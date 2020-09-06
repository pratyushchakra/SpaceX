import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Pods } from '../Pods';
import mock from '../../../utils/mock';
Enzyme.configure({ adapter: new Adapter() });

let store
beforeEach(() => {
    store = {
        "launchConfig": {
            "allLaunches": mock,
            "setLaunchData": jest.fn()
        },
        "filterConfig": {
            "filterData": {},
            "setFilterData": jest.fn()
        }
    }
})
describe('Pods Component', () => {
    it('renders Pods component with proper data', () => {
        const wrapper = shallow(
            <Pods store={store} />
        );
        expect(wrapper.debug()).toMatchSnapshot();
    });
    it('does not render Pod component if there is not launch data', () => {
        store.launchConfig.allLaunches = []
        const wrapper = shallow(
            <Pods store={store} />
        );
        expect(wrapper.debug()).toMatchSnapshot();
        expect(wrapper.find('Pod').length).toBe(0)
    })
});