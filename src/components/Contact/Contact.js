import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        // console.log(data);
    };
    return (
        <div id="contact" className="footer-bg p-5">
            <footer className="row d-flex align-items-center ml-5">
                <div className="col-md-5">
                    <h3 className="font-weight-bold">Let us handle your project, <br /> professionally.</h3>
                    <p>With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                </div>
                <div className="col-md-7 mb-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control w-75" type="email" id="email" placeholder="Your email address*" name="email" ref={register({ required: true })} />
                        {errors.email && <span className="text-danger">This field is required</span>}
                        <br />
                        <input className="form-control w-75" type="name" id="name" placeholder="Your name / Company’s name*" name="name" ref={register({ required: true })} />
                        {errors.name && <span className="text-danger">This field is required</span>}
                        <br />
                        <textarea rows="5" className="form-control w-75" type="text" id="message" placeholder="Your message..." name="message" ref={register({ required: true })} />
                        {errors.message && <span className="text-danger">This field is required</span>}
                        <br />
                        <input className="btn btn-dark px-5" type="submit" value="Send" />
                    </form>
                </div>
            </footer>
            <p className="text-center text-secondary mt-5">Copyright Creative Agency, {(new Date().getFullYear())}</p>
        </div>
    );
};

export default Contact;