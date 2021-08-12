import React from 'react';
import BtnImage from '../BtnImage/BtnImage';
import shop from "../../assets/images/sidebar-btn/reshot-icon-moon-rover-M7R4BJZS3L.png";

export default function Navbar() {
    return (
        <div className="nav">
            <BtnImage text="galaxy" imgSrc={shop}/>
            <BtnImage text="shop"/>
            <BtnImage text="shop"/>
            <BtnImage text="shop"/>
        </div >
    )
}
