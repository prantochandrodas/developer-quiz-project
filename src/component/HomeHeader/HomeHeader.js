import React from 'react';
import headerImg from'../../Img/developer.webp'
import './HomeHeader.css';
const HomeHeader = () => {
    return (
        <div className='homeheader'>
            <img src={headerImg} alt="" />
        </div>
    );
};

export default HomeHeader;