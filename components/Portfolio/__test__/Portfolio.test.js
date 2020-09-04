import React from 'react';
import { shallow } from 'enzyme';

import Portfolio from '../Portfolio';

describe('Portfolio Component', () => {
    it('it should render as expected', () => {
        const wrapper = shallow(
            <Portfolio />
        );
        // expect(wrapper.debug()).toMatchSnapshot()
    });
})