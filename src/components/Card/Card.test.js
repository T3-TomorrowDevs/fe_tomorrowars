import React from "react";
import '@testing-library/jest-dom';
import data from "../../data/data";

import { mount } from 'enzyme';

import Card from "./Card";

describe('Card testing', () => {

    let wrapper;
    beforeEach(() => {
        const property = data.troops[0];
        wrapper = mount(<Card property={property}/>);
    });

    it('should contain form elements', () => {
        expect(wrapper.find('input').prop('placeholder')).toEqual(0);
        expect(wrapper.find('button').text()).toContain("BUY");
    });
});