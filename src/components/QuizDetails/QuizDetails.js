import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './QuizDetails.css'

const QuizDetails = () => {
    const QuizkData = useLoaderData();
    // console.log(clickData);
    const { data } = QuizkData;
    const quizs = data.questions;
    return (
        <div>
            <h1>Quiz of{data.name} </h1>
            {
                quizs.map(quiz => <Quiz
                    kye={quiz.id}
                    quiz={quiz}

                ></Quiz>)
            }
        </div>
    );
};

export default QuizDetails;