import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ResizeObserver } from "@juggle/resize-observer";
import Earth from '../../components/Earth/Earth';

export default function App() {
    return (
        // 3D Canvas
        <Canvas className="canvas" resize={{ polyfill: ResizeObserver }}>
            <Suspense fallback={null}>
                <Earth />
            </Suspense>
        </Canvas>
    )
}
