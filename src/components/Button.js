import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES= ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

        const checkButtonSize = SIZES.includes(buttonSize)
        ? buttonSize
        : SIZES[0];

        return (
            <Link to='/video' className='btn-mobile'>
                <button
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>

            </Link>
        )
};

export const Button2 = ({
    children,
    type,
    onClick,
    buttonStyle2,
    buttonSize2
}) => {
    const checkButtonStyle2 = STYLES.includes(buttonStyle2)
        ? buttonStyle2
        : STYLES[0];

        const checkButtonSize2 = SIZES.includes(buttonSize2)
        ? buttonSize2
        : SIZES[0];

        return (
            <Link to='/contacto' className='btn-mobile2'>
                <button
                className={`btn ${checkButtonStyle2} ${checkButtonSize2}`}
                onClick={onClick}
                type={type}
                >
                    {children}
                </button>

            </Link>
        )
};
