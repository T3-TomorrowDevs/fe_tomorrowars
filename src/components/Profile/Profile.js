import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUser } from '../../features/user/userSlice';

export default function Profile() {

    const history = useHistory();
    const user = useSelector(selectUser);

    const logout = () => {
        // Remove localStorage objects
        localStorage.clear();
        // TODO: redirect or push to login page??
        history.push("/");
    }

    return (
        <div className="profile flex align-center">
            <div className="profile__info flex flex-col">
                <span>Level: {user.level}</span>
                <span>Credits: {user.credits}</span>
            </div>
            <div className="profile__name">
                <span>Name: {user.name}</span>
            </div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
