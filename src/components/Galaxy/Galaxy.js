import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ResizeObserver } from "@juggle/resize-observer";
import PlanetsSystem from "../PlanetsSystem/PlanetsSystem";

export default function Galaxy() {
    return (
        <Canvas className="canvas" resize={{ polyfill: ResizeObserver }} camera={{ position: [0, 20, 25], fov: 45 }}>
            <Suspense fallback={null}>
                <PlanetsSystem />
            </Suspense>
        </Canvas>
    )
}
