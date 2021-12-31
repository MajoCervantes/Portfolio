import React from 'react';
import "./cover.css";
import videoCover from "../../media/videoCover.mp4";

const Cover = () => {
    return (
        <div className='cover-container'>
            <video className='video' src={videoCover} autoPlay loop muted />
            <h1>Majo Cervantes</h1>
            <p>Desarrolladora | Diseñadora | Creadora De Contenido</p>

        </div>
    );
};

export default Cover;
