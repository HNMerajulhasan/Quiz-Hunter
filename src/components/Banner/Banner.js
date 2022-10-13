import React from 'react';
import Button from 'react-bootstrap/Button';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container banner my-5'>
            <div className="row">
                <div className="col-lg-6 banner-img">
                    <img src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=996&t=st=1665474726~exp=1665475326~hmac=b881a1835bb3baa651894fb93a5756bea0233600f94cb8774974a1cbb9d37c31" alt="" />
                </div>
                <div className="col-lg-6 bg-right ">
                    <h1 className=''>
                       Take a Participation in Quiz Test And evaluate your Knowledge</h1>
                    <p className='fs-5 my-4'>We’re a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.</p>
                    <Button className='px-5 py-2 fs-4 bg-color text-white' variant="">Learner Start Here</Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default Banner;

