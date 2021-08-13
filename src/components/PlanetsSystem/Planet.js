import React from 'react'
import Ecliptic from './Ecliptic';
import * as THREE from "three";

export default function Planet({ planet: { color, xRadius, zRadius, size } }) {
    return (
        <>
            <mesh position={[xRadius, 0, 0]}>
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} />
            </mesh>
            <Ecliptic xRadius={xRadius} zRadius={zRadius} />
        </>
    )
}
