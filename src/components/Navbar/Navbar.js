import React from 'react';
import background from "../../assets/images/sidebar-btn/reshot-icon-moon-rover-M7R4BJZS3L.png";

export default function Navbar() {
    return (
        <div className="nav nav__bg">
            {/* <div className="nav__btn btn__shop">
                <img src="../../assets/images/sidebar-btn/reshot-icon-moon-rover-M7R4BJZS3L.png" alt="" />
                <span className="btn__text">SHOP</span>
            </div> */}
            {/* <a href="" title="shop" className="nav__btn">
                <div className="btn__shop">
                    <span className="btn__text">SHOP</span>
                </div>
                {/* <div className="btn__text">SHOP</div>
            </a> */}

            <div className="nav__btn flex flex-col align-center" onClick={() => { console.log("casa") }}>
                <img className="img__shop" src="../../assets/images/sidebar-btn/reshot-icon-moon-rover-M7R4BJZS3L.png" alt="" />
                <span className="btn__text">SHOP</span>
            </div>
            <div className="nav__btn flex flex-col align-center" onClick={() => { console.log("casa") }}>
                <img className="img__shop" src="../../assets/images/sidebar-btn/reshot-icon-moon-rover-M7R4BJZS3L.png" alt="" />
                <span className="btn__text">SHOP</span>
            </div>
            <div className="nav__btn flex flex-col align-center" onClick={() => { console.log("casa") }}>
                <img className="img__shop" src="../../assets/images/sidebar-btn/reshot-icon-moon-rover-M7R4BJZS3L.png" alt="" />
                <span className="btn__text">SHOP</span>
            </div>
            <div className="nav__btn flex flex-col align-center" onClick={() => { console.log("casa") }}>
                <img className="img__shop" src="../../assets/images/sidebar-btn/reshot-icon-moon-rover-M7R4BJZS3L.png" alt="" />
                <span className="btn__text">SHOP</span>
            </div>
        </div >
    )
}
