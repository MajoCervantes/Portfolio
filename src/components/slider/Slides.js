import React from "react";

//Styles
import "./Slider.css";

//Media
import Countries from "../../media/countries.png";
import eCommerce from "../../media/ecommerce.png";
import Github from "../../media/github.png";
import ToDo from "../../media/todo.png";
import Trivia from "../../media/trivia.png";

const slidesInfo = [
    {
        src: Countries,
        alt: 'Countries info app',
        desc: 'Aplicación que da información acerca de cada país y clima en tiempo real, creada con React y consumo de API'
    },
    {
        src: eCommerce,
        alt: 'Tienda en línea',
        desc: 'Tienda en línea de artículos variados, creada con React, Redux y consumo de API'

    },
    {
        src: Github,
        alt: 'Aplicación de usuarios de github',
        desc: 'Aplicación para buscar usuarios de github y su información, creada con React'
    },
    {
        src: ToDo,
        alt: 'Lista de tareas',
        desc: 'Aplicación de lista de tareas por hacer, creada con React'
    },
    {
        src: Trivia,
        alt: 'Juego de Trivia',
        desc: 'Juego de trivia, creado con React y consumo de API'
    }
];

const slides = slidesInfo.map((slide, idx) => (
    <div key={idx} className="slide-container">
        <a href={`${slide.src === Trivia ? "https://trivia-two.vercel.app/</div>" : slide.src === ToDo ? "https://to-do-list-sand.vercel.app/" : slide.src === Github ? "https://github-user-three.vercel.app/" : slide.src === eCommerce ? "https://e-commerce-rho-sage.vercel.app/" : "https://weather-app-virid-three.vercel.app/"}`} target="_blank">
            <img src={slide.src} alt={slide.alt} />
        </a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));

export default slides;