import React from "react";
import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import { mount } from 'enzyme';
import BtnGoogle from "./BtnGoogle";

describe('Google login button test', () => {

    beforeEach(() => {
        let wrapper = mount(<BtnGoogle />);
    });

    it('should render the google login button', () => {
        expect(wrapper.find('h1').text()).toContain("Login with Google");
    });

});