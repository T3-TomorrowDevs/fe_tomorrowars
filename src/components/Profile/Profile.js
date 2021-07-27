import React from 'react';

export default function Profile() {

    return (
        <div className="profile flex align-center">
            <div className="profile__info flex flex-col">
                <span>Level: </span>
                <span>Coin: </span>
            </div>
            <div className="profile__name">
                <span>Name: </span>
            </div>
        </div>
    )
}
