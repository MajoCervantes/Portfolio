import React from 'react';
import "./Info.css";

const Info = ({ lang }) => {
    return (
        (lang ? (

            <div className='info-container'>
                <div className='info'>
                    <h1>Trabajemos juntos y creemos algo único</h1>
                </div>

            </div>
        ) :
            <div className='info-container'>
                <div className='info'>
                    <h1>Let's work together and create something unique</h1>
                </div>

            </div>
        )
    );
};

export default Info;
