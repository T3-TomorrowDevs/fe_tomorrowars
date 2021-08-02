import React from "react";
import '@testing-library/jest-dom';

import { mount } from 'enzyme';

import PlanetArmy from "./PlanetArmy";

import { screen, render, fireEvent, waitFor } from "@testing-library/react";

describe('PlanetArmy testing', () => {

    it("should render the basic fields", () => {
        render(<PlanetArmy />);
        expect(screen.getByRole("heading", { name: "Choose your planet and army name" })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /Planet's name/i })).toBeInTheDocument();
        expect(screen.getByRole("textbox", { name: /Army's name/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
    });

    it("should validate form fields", async () => {
        const mockSave = jest.fn();
        render(<PlanetArmy savePlanetArmyName={mockSave} />);

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
        expect(mockSave).not.toBeCalled();
        await waitFor(() => {
            expect(screen.getByText("Submit")).toBeInTheDocument();
        });
    });
});