import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Portfolio from '../Portfolio';
Enzyme.configure({ adapter: new Adapter() })

describe('Portfolio Component', () => {
    it('it should render as expected', () => {
        const wrapper = shallow(
            <Portfolio />
        );
        expect(wrapper.debug()).toMatchSnapshot()
    });
})