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
        desc: 'App that provides information about each country and weather in real time, created with React and API'
    },
    {
        src: eCommerce,
        alt: 'E Commerce',
        desc: 'Online store, built with React, Redux, and API'

    },
    {
        src: Github,
        alt: 'Guthub users app',
        desc: 'App to find github users and their information, created with React'
    },
    {
        src: ToDo,
        alt: 'To do list',
        desc: 'To Do List App, creater  with React'
    },
    {
        src: Trivia,
        alt: 'Quiz Game',
        desc: 'Quiz Game, created with React and API'
    }
];

const slidesEng = slidesInfo.map((slide, idx) => (
    <div key={idx} className="slide-container">
        <a href={`${slide.src === Trivia ? "https://trivia-two.vercel.app/</div>" : slide.src === ToDo ? "https://to-do-list-sand.vercel.app/" : slide.src === Github ? "https://github-user-three.vercel.app/" : slide.src === eCommerce ? "https://e-commerce-rho-sage.vercel.app/" : "https://weather-app-virid-three.vercel.app/"}`} target="_blank">
            <img src={slide.src} alt={slide.alt} />
        </a>
        <div className="slide-desc">
            <span>{slide.desc}</span>
        </div>
    </div>
));

export default slidesEng;