import React, { useState } from 'react';
import './styles/ProdInfo.css';
import { postCartThunk } from '../../store/slices/Cart.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ProdInfo = ({ product }) => {
  const [counter, setCounter] = useState(1);

  const dispatch = useDispatch();

  const navigate = useNavigate();
    
  const handleLess = () => {
    if(counter > 1) setCounter(counter - 1);
  }
  const handlePlus = () => {
    setCounter(counter + 1); 
  }
  const handleBuy = () => {
    dispatch(postCartThunk('/cart',{
      quantity: counter,
      productId: product.id,
    }));
  }

  return (
    <article className='prodinfo'>
        <h3 className='prodinfo__brand'>{product?.brand}</h3>
        <h2 className='prodinfo__title'>{product?.title} </h2>
        <p className='prodinfo__description'>{product?.description}</p>
        <div className='prodinfo__container'>
          <p className='prodinfo__price'>Price</p>
          <samp>${product?.price}</samp>
          <div className='prodinfo__counter'>
            <p>quantity</p>
            <button onClick={handleLess} className='prodinfo__btnkes'>-1</button>
            <samp>{counter}</samp>
            <button onClick={handlePlus} className='prodinfo__btnkes'>+1</button>
          </div>
        </div>
        <button onClick={handleBuy} className='prodinfo__btnkes'>Add to Cart</button>
    </article>
  )
}

export default ProdInfo;
