import React from "react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import App from "./App";

describe('App testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App />);
    });

    // it('should render the title of the App component', () => {
    //     expect(wrapper.find('h1').text()).toContain("Hello World");
    // });

    it('should contain HomePage component', () => {
        expect(wrapper.find('HomePage')).toHaveLength(1);
    });
});