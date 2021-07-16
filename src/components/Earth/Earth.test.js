import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import ReactThreeTestRenderer from '@react-three/test-renderer';
import { act } from "react-dom/test-utils";

import { mount } from 'enzyme';

import Earth from "./Earth";

describe('Earth testing', () => {

    beforeEach(() => {
        jest.mock('scheduler', () => require('scheduler/unstable_mock'));
    });

    it("mesh to have two children", async () => {
        // let renderer;
        // await act(async () => {
        //     renderer = await ReactThreeTestRenderer.create(<Earth />);
        // });

        const renderer = await ReactThreeTestRenderer.create(<Earth />);

        // //jest.mock('scheduler', () => require('scheduler/unstable_mock'));

        // // gets scene and children
        // //const meshChildren = renderer.scene.children[0].allChildren;

        // // we expected two children one material and one geometry
        // //expect(meshChildren.length).toBe(2);
        //const scene = renderer.scene;
        console.log(renderer.scene);
    });
});