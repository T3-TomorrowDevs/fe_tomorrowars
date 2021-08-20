import React, { useRef, useState } from "react";
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from "three";
import Lights from "./Lights";
import Sun from "./Sun";
import Planet from "./Planet";
import planetData from "./planetData";

export default function PlanetsSystem(props) {

    return (
        <>
            <color attach="background" args={["#111A2E"]} />
            <Stars
                radius={200}
                depth={60}
                count={50000}
                factor={7}
                saturation={0}
                fade={true} />
            <Lights />
            <Sun />
            {planetData.map((planet) => (
                <Planet planet={planet} key={planet.id} handleClick={props.handleClick}/>
            ))}
            <OrbitControls />
        </>
    )
}