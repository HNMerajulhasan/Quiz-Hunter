import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const All_Topic = ({ allTopic }) => {
    const { name, logo, total, id } = allTopic;
    return (
       <div> 
        <div className='cart'>
            <div>
                <img src={logo} alt="" />
                <h3>{name} </h3>
                <p className='text-primary'>Quiz : {total} </p>
            </div>
            <div className='btn-icon ps-2'>
                <Link to={`/quiz/${id}`}>
                    <Button className='px-5 py-2 fs-4 btn-cart bg-color text-white' variant=""> Start Practice  </Button>{' '}
                </Link>

            </div>
        </div>
    </div>
    );
};

export default All_Topic;