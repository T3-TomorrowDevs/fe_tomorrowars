import React from 'react';
import { useForm } from 'react-hook-form';

export default function PlanetArmy() {

    const { handleSubmit, register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div className="planetArmy flex flex-col">
            <h3 className="planetArmy__title flex justify-around">Choose your planet and army name</h3>
            
            <div className="planetArmy__form">
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

                    <button className="form__submit col-4" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
