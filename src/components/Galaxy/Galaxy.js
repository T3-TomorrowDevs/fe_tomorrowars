import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ResizeObserver } from "@juggle/resize-observer";
import PlanetsSystem from "../PlanetsSystem/PlanetsSystem";
import Modal from "../Modal/Modal";

export default function Galaxy() {

    const [isOpen, setIsOpen] = useState(false);
    const [planetName, setPlanetName] = useState();

    const handleClick = (e) => {
        setIsOpen(true);
        setPlanetName(e.object.name);
    };

    const goToAttack = () => {
        console.log("ATTACK");
    }

    return (
        <>
            <Canvas className="canvas" resize={{ polyfill: ResizeObserver }} camera={{ position: [0, 10, 40], fov: 45 }}>
                <Suspense fallback={null}>
                    <PlanetsSystem handleClick={handleClick} />
                </Suspense>
            </Canvas>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} onClick={goToAttack} text="Go to Attack">
                <span className="galaxy__modal">Do you want to attack the {planetName} planet?</span>
            </Modal>
        </>
    )
}
