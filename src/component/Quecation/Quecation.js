import React from 'react';
import { DEFAULT_BREAKPOINTS } from 'react-bootstrap/esm/ThemeProvider';
import Option from '../Option/Option';
import './Quecation.css';
import { BeakerIcon ,EyeIcon} from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Quecation = ({ que }) => {
//    console.log(que);
    const { question ,options,correctAnswer} = que;
    const splitque = question.split('<p>').join('');
    const newQue=splitque.split('</p>').join('');
  
   
   const seeTheCorrectAns=ans=>{
    toast.success(ans, {
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
  
    return (
        <div className='container'>
            <div className='quecation-container'>
                <div className='que'>
                    <h4> {newQue}</h4>
            
                  <div className='que-icon' onClick={()=>seeTheCorrectAns(correctAnswer)}>
                     <EyeIcon className="h-25 w-75 text-blue-500"/>
                  </div>
                    
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