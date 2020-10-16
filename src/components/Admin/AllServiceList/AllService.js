import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import Service from '../Service/Service';

const AllService = () => {
    const [totalOrders, setTotalOrders] = useState([]);
    useEffect(() => {
        const URL = 'https://agency-creative.herokuapp.com/orders'
        fetch(URL)
            .then(res => res.json())
            .then(data => setTotalOrders(data))
    }, [totalOrders])
    return (
        <div className="row p-5">
            <section className="col-md-3">
                <AdminSidebar />
            </section>
            <section className="col-md-9">
                <div className="row bg-light font-weight-bold">
                    <div className="col-md-3">
                        <p>Name</p>
                    </div>
                    <div className="col-md-3">
                        <p>Email</p>
                    </div>
                    <div className="col-md-3">
                        <p>Service</p>
                    </div>
                    <div className="col-md-3">
                        <p>Project Details</p>
                    </div>
                </div>
                {
                    totalOrders.map(order => <Service key={order._id} order={order} />)
                }
            </section>
        </div>
    );
};

export default AllService;