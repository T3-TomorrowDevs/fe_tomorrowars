import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';

export default function Profile() {

    const user = useSelector(selectUser);

    return (
        <div className="profile flex align-center">
            <div className="profile__info flex flex-col">
                <span>Level: {user.level}</span>
                <span>Credits: {user.coin}</span>
            </div>
            <div className="profile__name">
                <span>Name: {user.name}</span>
            </div>
        </div>
    )
}
