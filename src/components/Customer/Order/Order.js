import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    let history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let { name } = useParams();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        const URL = 'https://agency-creative.herokuapp.com/orders'
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('Order placed successfully.');
                history.push('/service');
            })
    };
    return (
        <div className="row p-5">
            <section className="col-md-3">
                <Sidebar />
            </section>
            <section className="col-md-9">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={loggedInUser.name} className="form-control w-50" type="name" id="name" placeholder="Your name / Company’s name" name="name" ref={register({ required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                    <br />
                    <input defaultValue={loggedInUser.email} className="form-control w-50" type="email" id="email" placeholder="Your email address" name="email" ref={register({ required: true })} />
                    {errors.email && <span className="text-danger">This field is required</span>}
                    <br />
                    <input defaultValue={name} className="form-control w-50" type="name" id="service" placeholder="Service name" name="service" ref={register({ required: true })} />
                    {errors.service && <span className="text-danger">This field is required</span>}
                    <br />
                    <textarea rows="4" className="form-control w-50" type="text" id="details" placeholder="Project details..." name="details" ref={register({ required: true })} />
                    {errors.details && <span className="text-danger">This field is required</span>}
                    <br />
                    <input className="btn btn-dark px-4" type="submit" value="Send" />
                </form>
            </section>
        </div>
    );
};

export default Order;