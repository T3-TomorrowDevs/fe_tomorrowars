import React from "react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import PlanetArmy from "./PlanetArmy";

import { screen, render, fireEvent } from "@testing-library/react";

describe('PlanetArmy testing', () => {

    // let wrapper;
    // beforeEach(() => {
    //     wrapper = mount(<PlanetArmy />);
    // });

    // it('should contain component title', () => {
    //     expect(wrapper.find('h3').text()).toContain("Choose your planet and army name");
    // });

    // it('should render the fields of the form', () => {
    //     expect(wrapper.find('input')).toHaveLength(2);
    //     expect(wrapper.find('button').text()).toContain("Submit");
    // });

    it("should render the basic fields", () => {
        render(<PlanetArmy />);
        expect(screen.getByRole("heading", { name: "Choose your planet and army name" })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /Planet's name/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /Army's name/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    });

    it("should validate form fields", async () => {
        const mockSave = jest.fn();
        render(<PlanetArmy saveData={mockSave} />);
        
        fireEvent.input(screen.getByRole("textbox", { name: /Planet's name/i }), {
            target: {
                value:
                    "Lorem ipsum "
            }
        });

        fireEvent.input(screen.getByRole("textbox", { name: /Army's name/i }), {
            target: {
                value:
                    "Lorem "
            }
        });

        fireEvent.submit(screen.getByRole("button", { name: /submit/i }));
        // expect(await screen.findAllByRole("alert")).toHaveLength(3);
        expect(mockSave).not.toBeCalled();
    });
});