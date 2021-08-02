import React from "react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import Header from "./Header";

describe('Header testing', () => {

    let wrapper;
    const initialState = {
        user: {
            user: {
                level: 1,
                credits: 1000,
                name: "Angela"
            }
        }
    }
    beforeEach(() => {
        const mockStore = configureStore();
        const store = mockStore(initialState);
        wrapper = mount(<Provider store={store}><Header /></Provider>);
    });

    it('should contain Header text', () => {
        expect(wrapper.find('h1').text()).toContain("Header");
    });

    it('should contain Profile component', () => {
        expect(wrapper.find('Profile')).toHaveLength(1);
    });
});