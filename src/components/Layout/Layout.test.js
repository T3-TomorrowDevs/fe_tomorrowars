import React from "react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import Layout from "./Layout";

describe('Layout testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Layout />);
    });

    it('should contain Header component', () => {
        expect(wrapper.find('h1').text()).toContain("Header");
    });
});