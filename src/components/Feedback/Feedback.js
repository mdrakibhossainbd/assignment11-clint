import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Feedback = () => {
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
        const URL = 'https://agency-creative.herokuapp.com/feedback';
        fetch(URL)
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, [feedback])
    return (
        <section className="mt-5 mb-5">
            <h2 className="text-center font-weight-bold">Clients <span className="text-success">Feedback</span></h2>
            <section className="d-flex justify-content-center">
                {
                    feedback.map(review => <Review review={review} key={review._id} />)
                }
            </section>
        </section>
    );
};

export default Feedback;