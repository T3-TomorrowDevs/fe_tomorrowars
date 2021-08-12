import React from 'react';

export default function BtnImage(props) {
    return (
        <div className="btnImage__container flex flex-col align-center" onClick={() => { console.log("shop") }}>
            <img className="btnImage__img" src={props.imgSrc} alt="" />
            <span className="btnImage__text">{props.text}</span>
        </div>
    )
}
