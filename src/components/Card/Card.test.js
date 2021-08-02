import React from "react";
import '@testing-library/jest-dom';
import data from "../../data/data";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';

import { mount } from 'enzyme';

import Card from "./Card";

describe('Card testing', () => {

    let wrapper;
    beforeEach(() => {
        const initialState = {
            user: {
                user: {
                    level: 1,
                    credits: 1000,
                    name: "Angela"
                }
            }
        }
        const mockStore = configureStore();
        const store = mockStore(initialState);
        const property = data.troops[0];
        wrapper = mount(<Provider store={store}><Card property={property} /></Provider>);
    });

    it('should contain form elements', () => {
        expect(wrapper.find('input').prop('placeholder')).toEqual(0);
        expect(wrapper.find('button').text()).toContain("BUY");
    });
});