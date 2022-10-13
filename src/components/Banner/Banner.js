import React from 'react';
import Button from 'react-bootstrap/Button';
import './Banner.css'

const Banner = () => {
    return (
        <div className='container banner my-5'>
            <div className="row">
                <div className="col-lg-6 banner-img">
                    <img src="https://img.freepik.com/free-vector/background-people-television-contest_23-2147595530.jpg?w=740&t=st=1665644518~exp=1665645118~hmac=6d5d5af76188c17f712980c66f036fee2a805a4502aa6676ae9783d569b47a74" alt="" />
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

