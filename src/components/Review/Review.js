import React from 'react';
import './Review.css';

const Review = ({ review: { img, name, position, description } }) => {
    return (
        <section className="row col-md-3 col-sm-6 col card m-3">
            <div className="card-body">
                <div className="d-flex">
                    <div>
                        <img className="reviewer-logo rounded-circle" src={img} alt="" />
                    </div>
                    <div className="ml-3">
                        <h5 className="card-title">{name}</h5>
                        <h6>{position}</h6>
                    </div>
                </div>
                <div>
                    <p className="card-text text-secondary mt-3">{description}</p>
                </div>
            </div>
        </section>
    );
};

export default Review;