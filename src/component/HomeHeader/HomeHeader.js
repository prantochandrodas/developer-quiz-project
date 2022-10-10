import React from 'react';
import headerImg from'../../Img/developer.webp'
import './HomeHeader.css';
const HomeHeader = () => {
    return (
        <div className='homeheader'>
            <div className='homeheader-details'>
                <p>It is a Quiz site . That will help you to know your knowledge about developer.Try to give all the answer correct. </p>
            </div>
            <div className='homeheader-img'>
                  <img src={headerImg} alt="" />
            </div>
        </div>
    );
};

export default HomeHeader;