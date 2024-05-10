import React from 'react';
import './styles/carProd.css';
// import {  deleteCartThunk } from '../store/slices/cart.slice';
import { useDispatch } from 'react-redux';


const CartProd = ({prod}) => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCartThunk('7cart',prod,id));
  }


  return (

   <article className='carprod'>
    <h3 className='cartprod__title'>{prod.product?.title}</h3>
    <figure className='cartprod__img'>
        <img src={prod.product.images[0].url} alt="product" />
    </figure>
    <div className='cartprod__container'>
        <button>-1</button>
        <samp>prod.quantity</samp>
        <button>+1</button>
    </div>
    <button>Delete</button>
    <samp className='cart__price'>Total: ${prod?.product.price}</samp>
   </article>
  )
}

export default CartProd;
