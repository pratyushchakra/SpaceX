import React from 'react';
import { shallow } from 'enzyme';

import Homepage from './../Homepage';

describe('Homepage', () => {
    it('it should render as expected', () => {
        const wrapper = shallow(
            <Homepage />
        );
        expect(wrapper.debug()).toMatchSnapshot();
    });
})