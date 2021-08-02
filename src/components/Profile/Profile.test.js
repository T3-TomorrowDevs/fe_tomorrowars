import React from "react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import Profile from "./Profile";

describe('Profile testing', () => {

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
        wrapper = mount(<Provider store={store}><Profile /></Provider>);
    });

    it('should contain profile info', () => {
        expect(wrapper.find('span')).toHaveLength(3);
        expect(wrapper.find('span').at(0).text()).toContain("Level: ");
        expect(wrapper.find('span').at(1).text()).toContain("Credits: ");
        expect(wrapper.find('span').at(2).text()).toContain("Name: ");
    });
});