import React from "react";
import '@testing-library/jest-dom';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';

import Main from "./Main";
import Shop from "../../components/Shop/Shop";

describe('Main testing', () => {

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
        wrapper = mount(<Provider store={store}><Main><Shop /></Main></Provider>);
    });

    it('should contain Main text', () => {
        expect(wrapper.find('Shop')).toHaveLength(1);
    });
});