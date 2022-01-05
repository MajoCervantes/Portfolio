import React from 'react';
import "./About.css";
import majo from "../../media/majo.jpeg";

const About = ({ lang }) => {
    return (
        (lang ? (
            <div className='about-container'>
                <div className='about-desc'>
                    <h3>Déjame contarte acerca de mi</h3>
                    <p> Conocimiento en todos los aspectos del proceso creativo, desde la conceptualización y la planificación hasta la ejecución.
                        Apasionada por el desarrollo de aplicaciones web, enfocada en crear entornos laborales agradables y exigentes, donde pueda contribuir a crear proyectos increíbles a medida de cada cliente gracias a mis habilidades singulares y creativas, a mis conocimientos especializados y a mi sentido de la estética y actitud detallista.
                    </p>
                </div>
                <div className='about-img'>
                    <img src={majo} alt="Majo" />
                </div>
            </div>

        ) :
            <div className='about-container'>
                <div className='about-desc'>
                    <h3>Let me tell you something about me</h3>
                    <p> Knowledge of all aspects of the creative process, from conceptualization and planning to execution.
                        Passionate about web application development, focused on creating pleasant and demanding work environments, where I can contribute to creating incredible projects tailored to each client thanks to my unique and creative skills, my specialized knowledge and my sense of aesthetics and attention to detail.
                    </p>
                </div>
                <div className='about-img'>
                    <img src={majo} alt="Majo" />
                </div>
            </div>
        )
    );
};


export default About;
