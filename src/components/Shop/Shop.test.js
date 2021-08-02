import React from "react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import Shop from "./Shop";

describe('Shop testing', () => {

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
        wrapper = mount(<Provider store={store}><Shop /></Provider>);
    });

    it('should contain Shop text', () => {
        expect(wrapper.find('h3').text()).toContain("Shop");
    });
});