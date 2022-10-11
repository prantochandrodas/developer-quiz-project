import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quecation from '../Quecation/Quecation';

const Quiz = () => {

    const quiz=useLoaderData();
    // console.log(quiz);
   const {questions,name}=quiz.data;
    console.log(name);
    return (
        <div>
            <h2 className='text-center my-5'>This is {name} Quiz</h2>
            {
                questions.map(que=><Quecation que={que}></Quecation>)
            }
        </div>
    );
};

export default Quiz;