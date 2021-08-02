import React, { useEffect } from 'react';
import Card from '../Card/Card';
import data from '../../data/data';
import axios from 'axios';
import { useState } from 'react';

export default function Shop() {

    const [properties, setProperties] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://c4ad5875-e804-4639-bd44-a07b3a2f480d.mock.pstmn.io/api/shop")
            .then((response) => {
                setProperties(response.data);
                setLoading(false);
                //console.log(response.data);
            })
            .catch(error => {
                //setErrorMessage({ errorMessage: error.message });
                console.error('There was an error!', error);
            })
    }, []);

    //const properties = data.troops;
    //const property = data.troops[0];

    return (
        <div className="shop flex flex-col">
            <h3 className="shop__title flex justify-around">Shop</h3>
            {loading
                ? 'Loading...'
                : <div className="slider">
                    <div className="slider__wrapper">
                        {properties && properties.map((property) => <Card key={property.troop_id} property={property} />)}
                    </div>
                </div>}

        </div>
    )
}
