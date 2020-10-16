import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <main className="row mt-2 p-5 d-flex align-items-center ml-3 mb-5">
            <div className="col-md-5 col-sm col">
                <h1 className="display-4 font-weight-bold">Let’s Grow Your <br /> Brand To The <br /> Next Level</h1>
                <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <button className="btn btn-dark px-4 mt-2">Hire us</button>
            </div>
            <div className="col-md-7 col-sm-7 col-7">
                <img className="main-img img-fluid" src="https://i.ibb.co/g3pKGwX/Frame.png" alt="" />
            </div>
        </main>
    );
};

export default Main;