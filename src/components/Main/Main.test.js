import React from "react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import Main from "./Main";
import Shop from "../../components/Shop/Shop";

describe('Main testing', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Main><Shop /></Main>);
    });

    it('should contain Main text', () => {
        expect(wrapper.find('Shop')).toHaveLength(1);
    });
});