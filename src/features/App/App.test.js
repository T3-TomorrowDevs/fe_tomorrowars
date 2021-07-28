import React from "react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import App from "./App";

describe('App testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<App />);
    });

    it('should contain HomePage component', () => {
        expect(wrapper.find('HomePage')).toHaveLength(1);
    });
});