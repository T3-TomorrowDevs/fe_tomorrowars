import React from "react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import Navbar from "./Navbar";

describe('Navbar testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Navbar />);
    });

    it('should contain BtnImage component', () => {
        expect(wrapper.find('BtnImage')).toHaveLength(4);
    });
});