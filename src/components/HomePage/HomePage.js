import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ResizeObserver } from "@juggle/resize-observer";
import Earth from '../Earth/Earth';
import TopSection from '../TopSection/TopSection';

export default function HomePage() {
    return (
        <>
            {/*Title section*/}
            <TopSection />
            {/*3D Canvas*/}
            <Canvas className="canvas" resize={{ polyfill: ResizeObserver }}>
                <Suspense fallback={null}>
                    <Earth />
                </Suspense>
            </Canvas>
        </>
    )
}
