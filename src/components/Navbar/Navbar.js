import React from 'react';
import BtnImage from '../BtnImage/BtnImage';
import shop from "../../assets/images/sidebar-btn/reshot-icon-moon-rover-M7R4BJZS3L.png";
import galaxy from "../../assets/images/sidebar-btn/reshot-icon-jupiter-PN9BDC3RYT.png";
import battles from "../../assets/images/sidebar-btn/reshot-icon-rocket-ship-YUMR2P8LFG.png";
import myPlanets from "../../assets/images/sidebar-btn/reshot-icon-planet-earth-NUHXQMGP5D.png";
import attack from "../../assets/images/sidebar-btn/reshot-icon-meteorite-JU785HLTSC.png";
import { useHistory } from 'react-router-dom';

export default function Navbar() {

    const history = useHistory();

    const goToShop = () => {
        history.push("/shop");
    }

    const goToGalaxy = () => {
        history.push("/galaxy");
    }

    const goToAttack = () => {
        history.push("/attack");
    }

    return (
        <div className="nav">
            <BtnImage text="galaxy" imgSrc={galaxy} handleClick={goToGalaxy}/>
            <BtnImage text="shop" imgSrc={shop} handleClick={goToShop}/>
            <BtnImage text="attack" imgSrc={attack} handleClick={goToAttack}/>
            <BtnImage text="battles" imgSrc={battles}/>
            <BtnImage text="my planets" imgSrc={myPlanets} />
        </div >
    )
}
