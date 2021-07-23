import React from "react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import Shop from "./Shop";

describe('Shop testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Shop />);
    });

    it('should contain Shop text', () => {
        expect(wrapper.find('h3').text()).toContain("Shop");
    });
});