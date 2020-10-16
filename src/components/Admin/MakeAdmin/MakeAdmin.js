import React from 'react';
import { useForm } from 'react-hook-form';
import AdminSidebar from '../AdminSidebar/AdminSidebar';


const MakeAdmin = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data, e) => {
        const URL = 'https://agency-creative.herokuapp.com/admins'
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('Admin added successfully.');
                e.target.reset();
            })
    };
    return (
        <div className="row p-5">
            <section className="col-md-3">
                <AdminSidebar />
            </section>
            <section className="col-md-9">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="font-weight-bold" htmlFor="email">Email</label>
                    <input className="form-control w-50" type="email" id="email" placeholder="Enter email address" name="email" ref={register({ required: true })} />
                    {errors.email && <span className="text-danger">This field is required</span>}
                    <br />
                    <input className="btn btn-success px-5" type="submit" />
                </form>
            </section>
        </div>
    );
};

export default MakeAdmin;