import React from "react";
import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import Battles from "./Battles";

describe('Battles testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Battles />);
    });

    it('should contain Battles text', () => {
        expect(wrapper.find('h3').text()).toContain("Battles");
    });
});