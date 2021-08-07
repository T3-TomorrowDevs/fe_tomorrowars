import React from "react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import Galaxy from "./Galaxy";

describe('Galaxy testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Galaxy />);
    });

    it('should contain Galaxy text', () => {
        expect(wrapper.find('h1').text()).toContain("Galaxy");
    });
});