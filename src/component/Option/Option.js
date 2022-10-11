import React from 'react';
import './Option.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Option = ({option,correctAnswer}) => {
    //   console.log(correctAnswer);
      const handelCorrectAns=(option)=>{
            if(option === correctAnswer){
                toast.success('Correct-answer', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }else{
                toast.error('wrong answer', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }

    }   
 
    return (
        <div className='option'>
          
             <ul onClick={()=>handelCorrectAns(option)}>
                <li>{option}</li>
             </ul>
          <ToastContainer></ToastContainer>
        </div>
    );
};

export default Option;