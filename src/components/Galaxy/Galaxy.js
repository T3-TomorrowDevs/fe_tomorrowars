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
    const [planetName, setPlanetName] = useState();
    const [modalContent, setModalContent] = useState();
    const history = useHistory();
    const user = useSelector(selectUser);

    const handleClick = (e) => {
        setIsOpen(true);
        const planetName = e.object.name;
        setPlanetName(planetName);

        user.planetName.includes(capitalizeFirstLetter(planetName))
            ? setModalContent(<span className="galaxy__modal">{planetName} is your planet</span>)
            : setModalContent(<span className="galaxy__modal">Do you want to attack the {planetName} planet?</span>)
    };

    const capitalizeFirstLetter = (word) => {
        return word.charAt(0) + word.slice(1).toLowerCase();
    }

    /**
     * Goes to attack page with the planet name
     */
    const goToAttack = () => {
        history.push({
            pathname: '/attack',
            search: '?planetName=' + planetName,
            state: {planetName: capitalizeFirstLetter(planetName)}
        });
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
