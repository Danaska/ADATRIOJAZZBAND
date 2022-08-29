import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';
import { Link } from 'react-router-dom';

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>Disfruta de nuestro Jazz</h1>
            <p>¿A qué estás esperando?</p>
            <br></br>
            <div className="hero-btns">
            <Link to='/contacto' className='btn-mobile'>
                <Button
                    className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large'>
                    CONTACTO
                </Button>
            </Link>
            <Link to='/video' className='btn-mobile'>
                <Button
                    className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large' onClick={console.log('hey')} >
                    Ver vídeo <i className='fa-solid fa-play' />
                </Button>
            </Link>
                <br></br>
            </div>
        </div>
    );
}

export default HeroSection;