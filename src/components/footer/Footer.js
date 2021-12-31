import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-info'>
                <h1>Majo Cervantes</h1>

            </div>
            <div className='footer-contact'>
                <h3>Contáctame</h3>
                <p>Y Pongámos Manos A La Obra</p>
                <div className='footer-mail'>
                    <i className='fab fa-solid fa-envelope'></i>
                    <p>champiis49@gmail.com</p>
                </div>
                <div className='footer-phone'>
                    <i className='fab fa-solid fa-phone'></i>
                    <p>55 3427 6643</p>
                </div>
            </div>
            <div className='footer-sns'>
                <div className='design-by'>
                    Diseñado Por Majo Cervantes
                </div>
                <div className='sns-links'>
                    <a href="https://www.linkedin.com/in/majo-cervantes-4b0739224/" target="blank" rel='noreferrer'>
                        <i className='fab fa-linkedin linkedin'></i>
                    </a>
                    <a href="https://github.com/MajoCervantes" target="blank" rel='noreferrer'>
                        <i className='fab fa-github github'></i>
                    </a>
                    <a href="https://www.facebook.com/mariajose.cervantes.338/" target="blank" rel='noreferrer'>
                        <i className='fab fa-facebook facebook'></i>
                    </a>  <a href="https://web.whatsapp.com/" target="blank" rel='noreferrer'>
                        <i className='fab fa-whatsapp whatsapp'></i>

                    </a>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
