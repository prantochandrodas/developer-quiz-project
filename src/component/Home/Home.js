import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import HomeHeader from '../HomeHeader/HomeHeader';
import './Home.css'
const Home = () => {
    const topic=useLoaderData();
 
    console.log(topic)
    return (
        <div className='home'>
            <HomeHeader></HomeHeader>
          {
            topic.data.map(cart=><Cart cart={cart}></Cart>)
          }
        </div>
    );
};

export default Home;