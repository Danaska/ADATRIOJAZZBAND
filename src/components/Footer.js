import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Nosotros</h2>
            <Link to='/Quienes'>Quiénes somos</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contáctanos</h2>
            <Link to='/Contacto'>Contacto</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Vídeos</h2>
            <Link to='/Video'>Escúchanos</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a target="_blank" rel="noreferrer" href="src/components/Footer">
            Instagram</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'>ADA'S TRIO JAZZ BAND © 2022</small>
          <div class='social-icons'>
            <a
              class='social-icon-link instagram'
              href='src/components/Footer'
              target='_blank'
              rel="noreferrer"
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
