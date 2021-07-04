import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtrr } from 'utils/findByTestAttr';
import Layout from 'components/shared/layout';

const setUp = (props={}) => {
    const component = shallow(<Layout {...props} />);
    return component;
};

describe('Layout Component', () => {

    let component;
    beforeEach(() => {
        component = setUp(); 
    });

    it('Should render without errors', () => {
        const wrapper = findByTestAtrr(component, 'layoutComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const logo = findByTestAtrr(component, 'incortaLogo');
        expect(logo.length).toBe(1);
    });

});
