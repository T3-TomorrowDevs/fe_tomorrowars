import React from 'react';
import { useForm } from 'react-hook-form';

export default function Card({ property }) {
    const { troop_id, troop_name, troop_picture, troop_level, troop_cost, troop_att, troop_def, troop_quantity } = property;
    const { handleSubmit, register } = useForm();

    const onSubmit = (data) => {
        console.log(troop_id);
        console.log(data);
    }

    return (
        <div id={troop_id} className="card">
            <img src={troop_picture} alt={troop_name} />
            <div className="details">
                {/* <span className="index">{troop_id}</span> */}
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
                    <input className="card__input" {...register("troop_quantity")} id={troop_quantity} placeholder={troop_quantity} />
                    <button type="submit" >BUY</button>
                </form>
                {/* </div> */}
            </div>
        </div>
    )
}
