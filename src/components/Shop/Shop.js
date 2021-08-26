import React, { useEffect } from 'react';
import Card from '../Card/Card';
import data from '../../data/data';
import axiosInstance from '../../axios/axios';
import { useState } from 'react';
import Button from '../Button/Button';
import { useHistory } from 'react-router-dom';

export default function Shop() {

    //const properties = data.troops;
    //const property = data.troops[0];

    const [properties, setProperties] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        setLoading(true);
        axiosInstance.get("/shop/")
            .then((response) => {
                console.log(response);
                //setProperties(response.data);
                //setLoading(false);
            })
            .catch(error => {
                //setErrorMessage({ errorMessage: error.message });
                console.error('There was an error!', error);
            })
    }, []);

    const goToGalaxy = () => {
        history.push("/galaxy");
    }

    return (
        <div className="shop flex flex-col">
            <h3 className="shop__title flex justify-around">Shop</h3>
            {loading
                ? 'Loading...'
                :
                <div className="shop__container">
                    <div className="slider">
                        <div className="slider__wrapper">
                            {properties && properties.map((property) => <Card key={property.troop_id} property={property} />)}
                        </div>
                    </div>
                    <div className="shop__btn flex justify-end">
                        <Button text="Go to Galaxy" onClick={goToGalaxy} />
                    </div>
                </div>
            }
        </div>
    )
}
