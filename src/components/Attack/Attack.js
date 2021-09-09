import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { selectUser } from '../../features/user/userSlice';
import Button from '../Button/Button';

export default function Attack() {
    const location = useLocation();
    const user = useSelector(selectUser);
    const [enemyPlanet, setEnemyPlanet] = useState();
    const [roll, setRoll] = useState();
    const [rollEnemy, setRollEnemy] = useState();

    useEffect(() => {
        console.log(location.pathname);
        console.log(location.search);
        console.log(location.state && location.state.planetName);
        setEnemyPlanet(location.state.planetName);
    }, [location]);

    const handleDiceRoll = () => {
        const roll = Math.floor(Math.random() * 6) + 1;
        setRoll(roll);
    }

    const handleDiceRollEnemy = () => {
        const rollEnemy = Math.floor(Math.random() * 6) + 1;
        setRollEnemy(rollEnemy);
    }

    const handleAttack = () => {
        console.log(`{
            userPlanet: ${user.planetName[0]},
            enemyPlanet: ${enemyPlanet},
            userMultiplier: ${roll},
            enemyMultiplier: ${rollEnemy}
        }`);
    }

    return (
        <div className="attack">
            <h3 className="attack__title flex justify-around">Prepare your attack</h3>
            <div className="attack__content flex" >
                <div className="attack__planet">
                    <div><span>Your planet: </span>{user.planetName[0]}</div>
                    <div><span>Enemy planet: </span>{enemyPlanet}</div>
                </div>
                <div className="attack__dice flex" >
                    <div className="attack__multiply-container">
                        <div className="flex flex-col">
                            <span>Calculate YOUR multiplier</span>
                            <Button typeClass="multiply__btn" type="button" text="Roll" onClick={handleDiceRoll} />
                            {
                                roll &&
                                <>
                                    <img className="multiply__dice-img" src={`../../assets/images/dice/${roll}.png`} alt={`${roll}.png`} />
                                    <span>YOUR attack multiplier is: {roll} </span>
                                </>
                            }
                        </div>
                    </div>
                    <div className="attack__multiply-container">
                        <div className="flex flex-col">
                            <span>Calculate ENEMY multiplier</span>
                            <Button typeClass="multiply__btn" type="button" text="Roll" onClick={handleDiceRollEnemy} />
                            {
                                rollEnemy &&
                                <>
                                    <img className="multiply__dice-img" src={`../../assets/images/dice/${rollEnemy}.png`} alt={`${rollEnemy}.png`} />
                                    <span>ENEMY multiplier attack is: {rollEnemy} </span>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="attack__btn flex justify-end">
                {
                    roll && rollEnemy && <Button typeClass="col-4" type="button" text="Attack" onClick={handleAttack}/>
                }
            </div>
        </div>
    )
}
