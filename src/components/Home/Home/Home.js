import React from 'react';
import Header from '../../Home/Header/Header';
import Companies from '../../Companies/Companies';
import Services from '../../Services/Services';
import Works from '../../Works/Works';
import Feedback from '../../Feedback/Feedback';
import Contact from '../../Contact/Contact';


const Home = () => {
    return (
        <>
            <Header />
            <Companies />
            <Services />
            <Works />
            <Feedback />
            <Contact />
        </>
    );
};

export default Home;