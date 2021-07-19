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

    it('should contain Canvas component', () => {
        expect(wrapper.find('canvas')).toHaveLength(1);
    });

    it('should contain TopSection component', () => {
        expect(wrapper.find('TopSection')).toHaveLength(1);
    });
});