import React from "react";

import "./Slider.css";

//Media
import countries from "../../media/countries.png";
import ecommerce from "../../media/ecommerce.png";
import github from "../../media/github.png";
import todo from "../../media/todo.png";
import trivia from "../../media/trivia.png";

const slidesInfo = [
    {
        src: countries,
        alt: "Countries Info App",
        desc: "Aplicación para buscar información de países y su clima en tiempo real"
    },
    {
        src: ecommerce,
        alt: "E-Commerce App",
        desc: "Tienda en línea de artíulos variados, creada con React, Redux y consumo de API"
    },
    {
        src: github,
        alt: "User github app",
        desc: "Aplicación para buscar usuarios de github y ver su información, creada con React y consumo de API"

    },
    {
        src: todo,
        alt: "To do app",
        desc: "Aplicación de tareas creada con react"
    },
    {
        src: trivia,
        alt: "Trivia app",
        desc: "App de juego de trivia en inglés. Creada con JS puro"
    }

];

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <a href={`${slide.src === countries ? "https://countries-info-rosy.vercel.app/" : slide.src === ecommerce ? "https://e-commerce-rho-sage.vercel.app/" : slide.src === github ? "https://github-user-three.vercel.app/" : slide.src === todo ? "https://to-do-list-sand.vercel.app/" : slide.src === trivia ? "https://trivia-two.vercel.app/" : null}`} target='_blank' rel="noreferrer">
            <img src={slide.src} alt={slide.alt} />
            <div className="slide-desc">
                <span>{slide.desc}</span>
            </div>
        </a>

    </div>
));

export default slides;
