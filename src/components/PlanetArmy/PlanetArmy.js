import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import axiosInstance from "../../axios/axios";
import Button from '../Button/Button';

export default function PlanetArmy() {

    const { handleSubmit, register, formState: { errors } } = useForm();

    const history = useHistory();

    const [errorMessage, setErrorMessage] = useState("");
    const [isRedirect, setIsRedirect] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isRedirect) {
            history.push("/shop");
        }
    }, [isRedirect])

    const onSubmit = (data) => {
        setLoading(true);
        console.log(data);

        savePlanetArmyName(data);
    }

    const savePlanetArmyName = (data) => {
        // TODO: Add headers
        const response = axiosInstance.post("/planetArmy", data)
            .then((response) => {
                setLoading(false);
                setIsRedirect(true);
            })
            .catch(error => {
                setLoading(false);
                setErrorMessage({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }

    return (
        <div className="planetArmy flex flex-col">
            <h3 className="planetArmy__title flex justify-around">Choose your planet and army name</h3>
            <div className="planetArmy__form">
                {/* // TODO: Add error style */}
                {errorMessage.errorMessage}
                <form className="form flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form__el flex flex-col col-2">
                        <label className="form__label" htmlFor="planet_name">Planet's name:</label>
                        <input className="form__input" {...register("planetName", { required: "This field is required" })} id="planet_name" />

                        {errors.planetName && <span>{errors.planetName.message}</span>}
                    </div>

                    <div className="form__el flex flex-col col-2">
                        <label className="form__label" htmlFor="army_name">Army's name:</label>
                        <input className="form__input" {...register("armyName", { required: true })} id="army_name" />

                        {errors.armyName && <span>This field is required</span>}
                    </div>

                    {/* <button className="form__submit col-4" type="submit" disabled={loading}>{loading ? 'Loading...' : 'Submit'}</button> */}
                    <Button typeClass="col-4" text={loading ? 'Loading...' : 'Submit'} disabled={loading} />
                </form>
            </div>
        </div>
    )
}
