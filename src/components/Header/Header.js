import React from 'react';
import Profile from '../Profile/Profile';

export default function Header() {
    return (
        <div className="header flex justify-between">
            <h1>Header</h1>
            <Profile />
        </div>
    )
}
