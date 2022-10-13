import React, { useState } from 'react';
//import { FaEye } from 'react-icons/fa'
import {faEye} from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Quiz.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Quiz = ({ quiz }) => {
    const [isShow, setIsShow] = useState(false);
    const { options, question, correctAnswer } = quiz;
    const handleAnsShow = () => {
        !isShow && toast.success(correctAnswer,{position: toast.POSITION.TOP_CENTER},{autoClose:3000})
        setIsShow(!isShow);
    }
   
    const hendleAns = (ans) => {
        if (correctAnswer === ans) {
            toast.success("woow !! your answers is right..Keep Rocking!!!", {position: toast.POSITION.TOP_CENTER},{autoClose:3000});
        }
        else {
            toast.error("Opps !! your answers is wrong!!!" , {position: toast.POSITION.TOP_CENTER},{autoClose:3000});
        }
    }
    
    return (
        <div className='quiz-container container mt-5'>
            <div className='eye-icon '>
                <h3 className="question" > Quiz :{question} </h3>
                {/* <p className='icon' onClick={() => { handleAnsShow(true) }}><FaEye></FaEye> </p> */}
                <p className='icon' onClick={() => { handleAnsShow(true) }}><FontAwesomeIcon icon={faEye} /></p>
            </div>
            <div className='option'>
                {
                    options.map(option => <p className='option-p' onClick={() => hendleAns(option)}>{option} </p>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Quiz;