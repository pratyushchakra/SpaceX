import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils'

import { Filters } from '../Filters';
import mock from '../../../utils/mock';
Enzyme.configure({ adapter: new Adapter() });

describe('Filter Component', () => {
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
    it('renders properly with valid data', () => {
        const wrapper = mount(
            <Filters store={store} />
        );
        expect(wrapper.debug()).toMatchSnapshot();
    });
    it('selects filter and highligts them', async () => {
        const wrapper = mount(
            <Filters store={store} />
        );
        await act(async () => {
            wrapper.find('#year-btn-2010').simulate('click');
            await jest.runAllTimers()
            await wrapper.update()
        })
        await act(async () => {
            await jest.runAllTimers()
            await wrapper.update()
        });
        expect(wrapper.debug()).toMatchSnapshot();
        // console.log('wrapper.find', wrapper.find('#year-btn-2010').html());
        // console.log('wrapper.selvet', wrapper.find('selected').length);
        // expect(wrapper.find('#year-btn-2010').hasClass('selected')).to.equal(true);
    })
})