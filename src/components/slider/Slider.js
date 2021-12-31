import React from 'react';
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import "./Slider.css";

//Components
import Slides from './Slides';

const Slider = () => {
    return (
        <div className='carousel-container'>
            <div className='carousel-title'>
                <h2>Mis Proyectos</h2>
            </div>
            <Carousel plugins={[ 'arrows' ]}
                arrows
                slidesPerPage={2}
                animationSpeed={200}
                centered
                offset={50}
                itemWidth={400}
                slides={Slides}
                breakpoints={{
                    960: {
                        slidesPerPage: 1,
                        arrows: false,
                        itemWidth: 350,
                    },
                }}
            />
        </div>
    );
};

export default Slider;
