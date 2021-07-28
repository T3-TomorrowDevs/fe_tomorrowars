import React from "react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import Layout from "./Layout";

describe('Layout testing', () => {

    let wrapper;

    const initialState = {
        user: {
            user: {
                level: 1,
                coin: 1000,
                name: "Angela"
            }
        }
    };

    beforeEach(() => {
        const mockStore = configureStore();
        const store = mockStore(initialState);
        wrapper = mount(<Provider store={store}><Layout /></Provider>);
    });

    it('should contain Header component', () => {
        expect(wrapper.find('Header')).toHaveLength(1);
    });

    it('should contain Sidebar component', () => {
        expect(wrapper.find('Sidebar')).toHaveLength(1);
    });

    it('should contain Main component', () => {
        expect(wrapper.find('Main')).toHaveLength(1);
    });
});