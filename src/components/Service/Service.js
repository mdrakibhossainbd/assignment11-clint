import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service: { img, name, description } }) => {
    return (
        <Link to={`/order/${name}`} className="text-decoration-none service-section text-center">
            <img className="w-25 mb-2 s-img" src={img} alt="" />
            <h5>{name}</h5>
            <p className="text-secondary mt-2">{description}</p>
        </Link>
    );
};

export default Service;