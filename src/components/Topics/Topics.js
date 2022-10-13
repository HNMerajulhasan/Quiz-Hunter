import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';
import './Topics.css'

const Topics = ({ cart }) => {
    const { name, logo, total, id } = cart;
    return (
        <div className='cart'>
            <div>
                <img src={logo} alt="" />
                <h3>{name} </h3>
                <p className='text-primary'>Quiz : {total} </p>
            </div>
            <div className='btn-icon ps-2'>
                <Link to={`/home/${id}`}>
                    <Button className='px-5 py-2 fs-4 btn-cart bg-color text-white' variant=""> Start Practice  </Button>{' '}
                </Link>

            </div>
        </div>
    );
};

export default Topics;