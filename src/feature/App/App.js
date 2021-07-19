import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ResizeObserver } from "@juggle/resize-observer";
import Earth from '../../components/Earth/Earth';
import TopSection from '../../components/TopSection/TopSection';

export default function App() {
    return (
        <div className="app">
            <TopSection />
            // 3D Canvas
            <Canvas className="canvas" resize={{ polyfill: ResizeObserver }}>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </div>
    )
}
