import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, useMoney } from "../../features/user/userSlice";

export default function Card({ property }) {
    const { troop_id, troop_name, troop_picture, troop_level, troop_cost, troop_att, troop_def, troop_quantity } = property;
    const { handleSubmit, register, setError, formState: { errors } } = useForm();

    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(troop_id);

        // Checks if the user has enogh money
        if (user.credits - (troop_cost * data.troop_quantity) >= 0) {

            const money = user.credits - (troop_cost * data.troop_quantity);

            dispatch(useMoney(money));
        } else {
            setError("troop_quantity", { type: "focus" , message: "not enough credit"}, { shouldFocus: true });
        }
    }

    return (
        <div id={troop_id} className="card">
            <img src={troop_picture} alt={troop_name} />
            <div className="details">
                <p className="location">
                    Name: {troop_name}<br />
                    Level: {troop_level}
                </p>
                <ul className="features">
                    <li><span>Cost </span>{troop_cost}</li>
                    <li><span>Att/Def </span>{troop_att}/{troop_def}</li>
                    {/* <li><span>Def </span>{troop_def}</li> */}
                </ul>
                {/* <div className="card__buy flex flex-row"> */}
                {/* <input className="card__input" type="text" placeholder={troop_num} name={troop_name}/>
                    <button type="button" onClick={(e) => handleSubmit(e)}>BUY</button> */}

                <form className="card__buy flex flex-row" onSubmit={handleSubmit(onSubmit)}>
                    <input type="number" name="name" className="card__input" {...register("troop_quantity")} id={troop_id} placeholder={troop_quantity} />
                    <button type="submit" >BUY</button>
                </form>
                {errors.troop_quantity && <span>{errors.troop_quantity.message}</span> }
                {/* </div> */}
            </div>
        </div>
    )
}
