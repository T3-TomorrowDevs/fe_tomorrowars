import React from "react";
import '@testing-library/jest-dom';
import { mount } from 'enzyme';

import Modal from "./Modal";

describe('Modal testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Modal open="true" />);
    });

    it('should contain Button component', () => {
        expect(wrapper.find('Button')).toHaveLength(1);
    });
});