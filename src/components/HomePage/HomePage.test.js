import React from "react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import HomePage from "./HomePage";

describe('HomePage testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<HomePage />);
    });

    it('should contain Canvas component', () => {
        expect(wrapper.find('canvas')).toHaveLength(1);
    });

    it('should contain TopSection component', () => {
        expect(wrapper.find('TopSection')).toHaveLength(1);
    });
});