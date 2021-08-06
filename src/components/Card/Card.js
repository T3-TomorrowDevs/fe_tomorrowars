import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../../axios/axios';
import { selectUser, useMoney } from "../../features/user/userSlice";

export default function Card({ property }) {
    const { troop_id, troop_name, troop_picture, troop_level, troop_cost, troop_att, troop_def, troop_quantity } = property;
    const { handleSubmit, register, setError, formState: { errors } } = useForm();

    const [loading, setLoading] = useState(false);
    const [error, setErrorMessage] = useState(null);

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(troop_id);

        // Checks if the user has enogh money
        if (user.credits - (troop_cost * data.troop_quantity) >= 0) {

            const money = user.credits - (troop_cost * data.troop_quantity);

            dispatch(useMoney(money));

            const body = {
                "credits": money,
                "troop_id": troop_id,
                "troop_quantity": data.troop_quantity
            }

            buyShips(body);

        } else {
            setError("troop_quantity", { type: "focus", message: "Not enough credit" }, { shouldFocus: true });
        }
    }

    const buyShips = (body) => {
        setLoading(true);
        axiosInstance.post("/buy", body)
            .then((response) => {
                setLoading(false);
                console.log(response.data);
            })
            .catch(error => {
                setLoading(false);
                setError("response", {message: error.message});
                //setErrorMessage({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }

    return (
        <div id={troop_id} className="card">
            <img src={troop_picture} alt={troop_name} />
            <div className="details">
                <div className="location">
                    <div className="flex"><span>Name: </span>{troop_name}</div>
                    <div className="flex"><span>Level: </span>{troop_level}</div>
                    <div className="flex"><span>Cost: </span>{troop_cost}</div>
                    <div className="flex"><span>Att/Def: </span>{troop_att}/{troop_def}</div>
                </div>
                <form className="card__buy flex flex-row" onSubmit={handleSubmit(onSubmit)}>
                    <input type="number" name="name" className="card__input" {...register("troop_quantity")} id={troop_id} placeholder={troop_quantity} />
                    <button type="submit" >BUY</button>
                </form>
                {loading && <span>Loading...</span>}
                {errors.response && <span>{errors.response.message}</span>}
                {errors.troop_quantity && <span>{errors.troop_quantity.message}</span>}
            </div>
        </div>
    )
}
