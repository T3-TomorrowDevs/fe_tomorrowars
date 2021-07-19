import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import Logo from "./Logo";

describe('Logo testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Logo />);
    });

    it('should render the Logo', () => {
        expect(wrapper.find('div').text()).toContain("TomorroWars");
    });

});