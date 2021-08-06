import React, { useEffect } from 'react';
import Card from '../Card/Card';
import data from '../../data/data';
import axiosInstance from '../../axios/axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';

export default function Shop() {

    const user = useSelector(selectUser);

    const [properties, setProperties] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axiosInstance.get("/shop")
            .then((response) => {
                setProperties(response.data);
                setLoading(false);
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
            <h3 className="shop__title flex justify-around">Shop credits: {user.credits}</h3>
            {loading
                ? 'Loading...'
                :
                <div>
                    <div className="slider">
                        <div className="slider__wrapper">
                            {properties && properties.map((property) => <Card key={property.troop_id} property={property} />)}
                        </div>
                    </div>
                    <div className="shop__btn flex justify-end">
                        <button>Go to Battle</button>
                    </div>
                </div>
            }
        </div>
    )
}
