import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar/AdminSidebar';


const AddService = () => {
    const { register, handleSubmit, errors } = useForm();
    let history = useHistory();
    const onSubmit = data => {
        const URL = 'https://agency-creative.herokuapp.com/services';
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                alert('Service added successfully. Check home page now.');
                history.push('/');
            })
    };
    return (
        <div className="row p-5">
            <section className="col-md-3">
                <AdminSidebar />
            </section>
            <section className="col-md-9">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="font-weight-bold" htmlFor="name">Service Title</label>
                    <input className="form-control w-50" type="name" id="name" placeholder="Enter Title" name="name" ref={register({ required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                    <br />
                    <label className="font-weight-bold" htmlFor="description">Description</label>
                    <textarea rows="4" className="form-control w-50" type="text" id="description" placeholder="Enter Description..." name="description" ref={register({ required: true })} />
                    {errors.description && <span className="text-danger">This field is required</span>}
                    <br />
                    <label className="font-weight-bold" htmlFor="icon">Icon (Optional)</label>
                    <input className="form-control-file" type="file" id="icon" placeholder="Select Icon" name="icon" ref={register({ required: false })} />
                    {errors.icon && <span className="text-danger">This field is required</span>}
                    <br />
                    <input className="btn btn-success px-5" type="submit" />
                </form>
            </section>
        </div>
    );
};

export default AddService;