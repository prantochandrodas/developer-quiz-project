import React from 'react';
import Option from '../Option/Option';
import './Quecation.css'
const Quecation = ({ que }) => {
//    console.log(que);
    const { question ,options,correctAnswer} = que;
    const splitque = question.split('<p>').join('');
    const newQue=splitque.split('</p>').join('');
  
    const {ans}=que.correctAnswer;
   
  
    return (
        <div className='container'>
            <div className='quecation-container'>
                <div className='que'>
                    <h4> {newQue}</h4>

                </div>
                <div className='option'>
                    {
                         options.map(option=><Option option={option} correctAnswer={correctAnswer}></Option>)
                        
                    }
                   
                </div>

            </div>
        </div>
    );
};

export default Quecation;