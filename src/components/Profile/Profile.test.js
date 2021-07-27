import React from "react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import Profile from "./Profile";

describe('Profile testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Profile />);
    });

    it('should contain profile info', () => {
        expect(wrapper.find('span')).toHaveLength(3);
        expect(wrapper.find('span').at(0).text()).toContain("Level: ");
        expect(wrapper.find('span').at(1).text()).toContain("Coin: ");
        expect(wrapper.find('span').at(2).text()).toContain("Name: ");
    });
});