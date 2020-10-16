import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const URL = 'https://agency-creative.herokuapp.com/services';
        fetch(URL)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])
    return (
        <section className="mt-5 mb-5">
            <h2 className="text-center mb-3 font-weight-bold">Provide awesome <span className="text-success">services</span></h2>
            <section className="d-flex justify-content-center">
                {
                    services.map(service => <Service service={service} key={service._id} />)
                }
            </section>
        </section>
    );
};

export default Services;