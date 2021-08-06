import React from 'react'

export default function Button(props) {
    return (
        <button className={`btn ${props.typeClass}`} type={props.type} disabled={props.loading}>{props.text}</button>
    )
}
