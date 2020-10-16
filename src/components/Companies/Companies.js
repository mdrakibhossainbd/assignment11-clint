import React, { useEffect } from 'react';
import { useState } from 'react';
import './Companies.css';

const Companies = () => {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        const URL = 'https://agency-creative.herokuapp.com/companies';
        fetch(URL)
            .then(res => res.json())
            .then(data => setCompanies(data))
    }, [])
    return (
        <section className="text-center partner-section mt-5 mb-5">
            {
                companies.map(company => <img className="company-logo img-fluid" src={company.img} key={company._id} alt="" />)
            }
        </section>
    );
};

export default Companies;