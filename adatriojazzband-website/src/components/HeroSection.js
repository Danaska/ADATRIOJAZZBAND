import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Disfruta de nuestro Jazz</h1>
            <p>¿A qué estás esperando?</p>
            <br></br>
            <div className="hero-btns">
                <Button
                    className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    CONTACTO
                </Button>
                <Button
                    className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large' onClick={console.log('hey')} >
                    Ver vídeo <i className='fa-solid fa-play' />
                </Button>
                <br></br>
            </div>
        </div>
    );
}

export default HeroSection;