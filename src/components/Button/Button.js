import React from 'react'

/**
 * Button component
 * @param {Props} props typeClass, type, onClick, text
 * @returns Button
 */
export default function Button(props) {
    return (
        <button className={`btn ${props.typeClass}`} type={props.type} disabled={props.loading} onClick={props.onClick}>{props.text}</button>
    )
}
