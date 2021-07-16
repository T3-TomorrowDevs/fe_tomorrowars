import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import ReactThreeTestRenderer from '@react-three/test-renderer';

import { mount } from 'enzyme';

import Earth from "./Earth";

describe('Earth testing', () => {

    beforeEach(() => {
        jest.mock('scheduler', () => require('scheduler/unstable_mock'));
    });

    it("mesh to have two children", async () => {

        const renderer = await ReactThreeTestRenderer.create(<Earth />);

        console.log(renderer.scene);

        // gets scene and children
        //const meshChildren = renderer.scene.children[0].allChildren;

        // we expected two children one material and one geometry
        //expect(meshChildren.length).toBe(2);
    });
});