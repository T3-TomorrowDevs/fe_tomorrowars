import React from "react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import BtnImage from "./BtnImage";

describe('BtnImage testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<BtnImage text="shop"/>);
    });

    it('should contain shop text', () => {
        expect(wrapper.find('span').text()).toContain("shop");
    });
});