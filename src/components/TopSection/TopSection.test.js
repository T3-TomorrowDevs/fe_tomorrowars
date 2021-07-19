import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import TopSection from "./TopSection";

describe('TopSection testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<TopSection />);
    });

    it('should contain Logo component', () => {
        expect(wrapper.find('Logo')).toHaveLength(1);
    });
});