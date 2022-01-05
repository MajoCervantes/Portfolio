import React from 'react';
import "./cover.css";
import videoCover from "../../media/videoCover.mp4";

const Cover = ({ lang }) => {
    return (
        (lang ? (
            <div className='cover-container'>
                <video className='video' src={videoCover} autoPlay loop muted />
                <h1>Majo Cervantes</h1>
                <p>Desarrolladora | Diseñadora | Creadora De Contenido</p>

            </div>
        ) : (

            <div className='cover-container'>
                <video className='video' src={videoCover} autoPlay loop muted />
                <h1>Majo Cervantes</h1>
                <p>Web Developer | Designer |Content Creator</p>

            </div>
        ))
    );
};

export default Cover;
