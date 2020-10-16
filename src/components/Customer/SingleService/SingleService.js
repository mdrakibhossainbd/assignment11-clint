import React from 'react';

const SingleService = ({ service: { service, details, _id } }) => {
    const handleService = () => {
        const URL = `https://agency-creative.herokuapp.com/delete/${_id}`
        fetch(URL, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then((result) => {
                alert('Successfully deleted!')
            });
    };
    return (
        <div className="row">
            <div className="shadow-sm p-3 bg-light rounded col-md-4 border m-3">
                <h5>{service}</h5>
                <p>{details}</p>
                <button onClick={handleService} className="btn btn-dark">Cancel</button>
            </div>
        </div>
    );
};

export default SingleService;