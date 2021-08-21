import React from "react";
import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import Attack from "./Attack";

describe('Attack testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Attack />);
    });

    it('should contain Attack test', () => {
        expect(wrapper.find('h3').text()).toContain("Attack");
    });
});