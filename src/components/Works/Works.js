import React from 'react';
import Carousel from 'react-multi-carousel';
import './Works.css';
import "react-multi-carousel/lib/styles.css";


const Works = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className="works-bg p-5" id="portfolio">
            <h2 className="text-center text-white font-weight-bold mb-4">Here are some of <span className="text-success">our works</span></h2>
            <Carousel
                responsive={responsive}
                autoPlay
                autoPlaySpeed={2000}
                infinite
                arrows
                showDots
            >
                <div>
                    <img className="sliderImg" src="https://i.ibb.co/HzpTQ6N/carousel-1.png" alt="" />
                </div>
                <div>
                    <img className="sliderImg" src="https://i.ibb.co/3W7HP74/carousel-2.png" alt="" />
                </div>
                <div>
                    <img className="sliderImg" src="https://i.ibb.co/kgSHyd9/carousel-3.png" alt="" />
                </div>
                <div>
                    <img className="sliderImg" src="https://i.ibb.co/sgWbQDb/carousel-4.png" alt="" />
                </div>
                <div>
                    <img className="sliderImg" src="https://i.ibb.co/0c7snMb/carousel-5.png" alt="" />
                </div>
            </Carousel>
        </section >
    );
};

export default Works;