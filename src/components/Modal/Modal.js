import React from 'react';
import Button from '../Button/Button';

export default function Modal({ open, children, onClose, text, onClick }) {
    if (!open) return null;
    return (
        <div className="modal__overlay">
            <div className="modal flex flex-col">
                <div className="modal__close flex justify-end" onClick={onClose}>&times;</div>
                {children}
                <hr className="spacing spacing--2"></hr>
                <Button onClick={onClick} text={text} />
            </div>
        </div>
    )
}
