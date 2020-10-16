import React from 'react';

const Service = ({ order: { name, email, service, details } }) => {
    return (
        <>
            <div className="row">
                <div className="col-md-2">
                    {name}
                </div>
                <div className="col-md-4">
                    {email}
                </div>
                <div className="col-md-3">
                    {service}
                </div>
                <div className="col-md-3">
                    {details}
                </div>
            </div>
            <hr />
        </>
    );
};

export default Service;