import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const CustomerReview = () => {
    let history = useHistory();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data.img = loggedInUser.img;

        fetch('https://agency-creative.herokuapp.com/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('Thanks for your feedback.');
                history.push('/');
            })
    };
    return (
        <div className="row p-5">
            <section className="col-md-3">
                <Sidebar />
            </section>
            <section className="col-md-9">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control w-50" defaultValue={loggedInUser.name} type="name" id="name" placeholder="Your name" name="name" ref={register({ required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                    <br />
                    <input className="form-control w-50" type="name" id="position" placeholder="Company’s name, Designation" name="position" ref={register({ required: true })} />
                    {errors.position && <span className="text-danger">This field is required</span>}
                    <br />
                    <textarea rows="4" className="form-control w-50" type="text" id="description" placeholder="Description..." name="description" ref={register({ required: true })} />
                    {errors.description && <span className="text-danger">This field is required</span>}
                    <br />
                    <input className="btn btn-dark px-4" type="submit" />
                </form>
            </section>
        </div>
    );
};

export default CustomerReview;