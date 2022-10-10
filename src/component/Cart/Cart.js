import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    const { logo ,name} = cart;
    return (
      <div className='cart'>
            <div className='cart-img'>
            <img src={logo} alt="" />
            </div>
            <div className='cart-footer'>
                <p>{name}</p>
                <button className='btn btn-primary'>Start Practice</button>
            </div>
      </div>
    );
};

export default Cart;