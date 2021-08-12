import React from "react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import Sidebar from "./Sidebar";

describe('Sidebar testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Sidebar />);
    });

    it('should contain Navbar component', () => {
        expect(wrapper.find('Navbar')).toHaveLength(1);
    });
});