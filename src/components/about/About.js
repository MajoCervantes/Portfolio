import React from 'react';
import "./About.css";
import majo from "../../media/majo.jpg";

const About = () => {
    return (
        <div className='about-container'>
            <div className='about-desc'>
                <h3>Déjame contarte acerca de mi</h3>
                <p>Soy Desarrolladora Full Stack, centrada en crear experiencias limpias y fáciles de usar. Me apasiona desarrollar páginas que mejoren la vida cotidiana de las personas</p>
            </div>
            <div className='about-img'>
                <img src={majo} alt="Majo" />
            </div>
        </div>
    );
};

export default About;
