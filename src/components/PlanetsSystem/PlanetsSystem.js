import React, { useRef } from "react";
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from "three";
import Lights from "./Lights";
import Sun from "./Sun";
import Planet from "./Planet";
import planetData from "./planetData";

export default function Earth(props) {

    return (
        <>
            <color attach="background" args={"#111A2E"} />
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
                <Planet planet={planet} key={planet.id} />
            ))}
            <OrbitControls />
        </>
    )
}