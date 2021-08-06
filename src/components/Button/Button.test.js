import React from "react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import Button from "./Button";

describe('Button testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Button />);
    });

    it('should contain Button text', () => {
        expect(wrapper.find('button').text()).toContain("Click");
    });

});