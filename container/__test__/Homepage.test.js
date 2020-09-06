import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Context from '../../utils/Context'
import Homepage from './../Homepage';
import mockData from '../../utils/mock'
Enzyme.configure({ adapter: new Adapter() })

describe('Homepage', () => {
    it('should render as expected', () => {
        const wrapper = shallow(
            <Homepage />
        );
        expect(wrapper.debug()).toMatchSnapshot();
    });
    it('should render Portfolio component', () => {
        const wrapper = shallow(
            <Homepage />
        );
        expect(wrapper.find('Portfolio')).toBeTruthy()
    });
    it('renders the component deeply', () => {
        const wrapper = mount(
            <Context.Provider data={mockData}>
                <Homepage />
            </Context.Provider>
        );
        expect(wrapper.find('Pod').length).toBe(2);
        expect(wrapper.find('Filter')).toBeTruthy()
    })
});