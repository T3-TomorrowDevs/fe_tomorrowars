import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <div className="main__container">
                <Sidebar />
                <Main>{children}</Main>
            </div>
        </div>
    )
}