import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import SingleService from '../SingleService/SingleService';

const ServiceList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [serviceList, setServiceList] = useState([]);
    useEffect(() => {
        const URL = 'https://agency-creative.herokuapp.com/target-orders?email=' + loggedInUser.email;
        fetch(URL)
            .then(res => res.json())
            .then(data => setServiceList(data))
    }, [serviceList]);
    return (
        <div className="row p-5">
            <section className="col-md-3">
                <Sidebar />
            </section>
            <section className="col-md-9">
                {
                    serviceList.length === 0 && <p className="mt-5 display-4 text-center">No order found. Please <Link className="text-decoration-none" to="/">place a new order</Link> with your email address.</p>
                }
                {
                    serviceList.map(service => <SingleService service={service} key={service._id} />)
                }
            </section>
        </div>
    );
};

export default ServiceList;