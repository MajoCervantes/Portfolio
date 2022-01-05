import React, { useState } from 'react';
import "./Navbar.css";

const Navbar = ({ isScrolling, changeLanguage, lang, setLang }) => {


    const toTheTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    return (
        <nav className={`navbar ${isScrolling > 500 ? "scrolling" : null}`}>
            <div className='navbar-logo' >
                <h1 onClick={toTheTop}> Majo Cervantes</h1>
                {/* <div className='language-container'> */}
                <button className='language-button' onClick={changeLanguage}>{`${!lang ? "ESP" : "ENG"}`}</button>
                {/* </div> */}
            </div>
        </nav>
    );
};

export default Navbar;
