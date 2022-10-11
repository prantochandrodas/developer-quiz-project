import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'
const Cart = ({ cart }) => {
    const { logo ,name,id} = cart;
    return (
      <div className='cart'>
            <div className='cart-img'>
            <img src={logo} alt="" />
            </div>
            <div className='cart-footer'>
                <p>{name}</p>
                <Link to={`/quiz/${id}`}><button  className='btn btn-primary'>Start Practice</button></Link>
            </div>
      </div>
    );
};

export default Cart;