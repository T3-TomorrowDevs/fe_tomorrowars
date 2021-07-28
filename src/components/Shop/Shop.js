import React from 'react';
import Card from '../Card/Card';
import data from '../../data/data';

export default function Shop() {

    const properties = data.troops;
    const property = data.troops[0];

    return (
        <div className="shop flex flex-col">
            <h3 className="shop__title flex justify-around">Shop</h3>
            <div className="slider">
                <div className="slider__wrapper">
                    {properties.map((property) => <Card key={property.troop_id} property={property} />)}
                </div>
            </div>
        </div>
    )
}
