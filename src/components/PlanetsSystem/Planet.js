import React from 'react'
import Ecliptic from './Ecliptic';
import * as THREE from "three";
import Roboto from '../../assets/fonts/Roboto.json';

export default function Planet({ planet: { color, xRadius, zRadius, size, name }, handleClick }) {
    const font = new THREE.FontLoader().parse(Roboto);
    const textOptions = {
        font,
        size: .5,
        height: .2
    };

    return (
        <>
            <mesh position={[xRadius, 0, 0]} onClick={handleClick} name={name}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[xRadius-.5, -3, 0]}>
                <textGeometry attach='geometry' args={[name, textOptions]} />
                <meshStandardMaterial attach='material' color="yellow"/>
            </mesh>
            <Ecliptic xRadius={xRadius} zRadius={zRadius} />
        </>
    )
}
