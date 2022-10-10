import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import HomeHeader from '../HomeHeader/HomeHeader';
import './Home.css'
const Home = () => {
  const topic = useLoaderData();

  console.log(topic)
  return (
    <div className='home'>
      <HomeHeader></HomeHeader>
      <div className='card-container container'>
          {
            topic.data.map(cart => <Cart 
              key={cart.id}
              cart={cart}></Cart>)
          }
      </div>
    </div>
  );
};

export default Home;