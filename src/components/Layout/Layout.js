import React, { useEffect } from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import { useDispatch, useSelector } from 'react-redux';
import { fetchGetUser, selectUser } from '../../features/user/userSlice';

export default function Layout({ children }) {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    console.log(user);

    // for fetching an API on mount
    useEffect(() => {
        // get user information
        dispatch(fetchGetUser());
    }, []);

    return (
        <div>
            {user.length !== 0 &&
                <div>
                    <Header />
                    <div className="main__container">
                        <Sidebar />
                        <Main>{children}</Main>
                    </div>
                </div>
            }
        </div>
    )
}