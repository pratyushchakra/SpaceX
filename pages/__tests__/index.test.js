import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Component from '../';
import Context from '../../utils/Context';
import mockData from '../../utils/mock';
import moxios from 'moxios';
beforeEach(() => {
 
})
beforeEach(() => {
    moxios.install()
    moxios.stubRequest('https://api.spacexdata.com/v3/launches?limit=100', {
        status: 200,
        response: mockData
    });
});

afterEach(() => {
    moxios.uninstall()
})

Enzyme.configure({ adapter: new Adapter() });

describe('spacex page', () => {
    it('renders the spaceX page as expected', async () => {
        const props = await Component.getInitialProps()
        const wrapper = mount(
            <Component {...props} />
        );
        expect(wrapper.debug()).toMatchSnapshot();
    });
    it('renders child component with proper data', async () => {
        const props = await Component.getInitialProps()
        const wrapper = mount(
            <Component {...props} />
        );
        expect(wrapper.find('Pod').length).toBe(2);
        expect(wrapper.find('Filter')).toBeTruthy();
    });
    it('does not render child components when service return no data', () => {
        const wrapper = mount(
            <Component />
        );
        expect(wrapper.debug()).toMatchSnapshot();
        expect(wrapper.find('Pod').length).toBe(0);
    });
    it('renders app smoothly even when service fails', () => {
        moxios.install()
        moxios.stubRequest('https://api.spacexdata.com/v3/launches?limit=100', {
            status: 500,
            response: undefined
        });
        const wrapper = mount(
            <Component />
        );
        expect(wrapper.debug()).toMatchSnapshot();
        expect(wrapper.find('Pod').length).toBe(0);
    })
});