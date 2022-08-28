import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect( () => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                   <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                       <img src="./images/logoGrande4.png" width="50" height="50" alt="ADA TRIO JAZZ BAND" className="icon.logo"></img>
                       ADA'S TRIO JAZZ BAND
                   </Link>
                   <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fa-solid fa-bars'} />
                   </div>
                   <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                      <Link to='/quienes' className='nav-links' onClick={closeMobileMenu}>
                       Quiénes somos
                      </Link>
                    </li>
                    <li className='nav-item'>
                      <Link to='/eventos' className='nav-links' onClick={closeMobileMenu}>
                       Próximos Eventos
                      </Link>
                    </li>
                   </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar
