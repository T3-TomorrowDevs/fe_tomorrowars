import React from 'react';

export default function BtnImage(props) {
    return (
        <div className="btnImage__container flex flex-col align-center" onClick={props.handleClick}>
            <img className="btnImage__img" src={props.imgSrc} alt={props.text} />
            <span className="btnImage__text">{props.text}</span>
        </div>
    )
}
