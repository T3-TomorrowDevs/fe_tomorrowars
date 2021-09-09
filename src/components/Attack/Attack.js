import React, { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function Attack() {
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
        console.log(location.search);
        console.log(location.state && location.state.planetName);
     }, [location]);
     
    return (
        <div className="attack">
            <h3 className="attack__title">Attack</h3>
        </div>
    )
}
