import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { ResizeObserver } from "@juggle/resize-observer";
import PlanetsSystem from "../PlanetsSystem/PlanetsSystem";
import Modal from "../Modal/Modal";
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';

export default function Galaxy() {

    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState();
    const history = useHistory();
    const user = useSelector(selectUser);

    const handleClick = (e) => {
        setIsOpen(true);
        const planetName = e.object.name;
        const planetNameUL = e.object.name.charAt(0) + e.object.name.slice(1).toLowerCase();

        user.planetName.includes(planetNameUL)
            ? setModalContent(<span className="galaxy__modal">{planetName} is your planet</span>)
            : setModalContent(<span className="galaxy__modal">Do you want to attack the {planetName} planet?</span>)
    };

    const goToAttack = () => {
        history.push("/attack");
    }

    return (
        <>
            <Canvas className="canvas" resize={{ polyfill: ResizeObserver }} camera={{ position: [0, 10, 40], fov: 45 }}>
                <Suspense fallback={null}>
                    <PlanetsSystem handleClick={handleClick} />
                </Suspense>
            </Canvas>
            <Modal open={isOpen} onClose={() => setIsOpen(false)} onClick={goToAttack} text="Go to Attack">
                {isOpen && modalContent}
            </Modal>
        </>
    )
}
