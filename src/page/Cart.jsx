import React, { useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { getCartThunk } from '../store/slices/Cart.slice';
import CartProd from '../components/cart/CartProd';
// import { postPurchasesThunk } from '../store/slices/purchases.slices';

const Cart = () => {

  const cart = useSelector(store => store.cart); 

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk('/cart'));
  }, []);

const handleBuy = () => {
dispatch(postPurchasesThunk(''));
dispatch(SettCart());
}

  return (
    <>
      <div>
        {cart?.map(prod => ( 
          <CartProd
            key={prod.id} 
            prod={prod}
          />
        ))}
      </div>
      <div className='cart__totals'>
         <p>Total Products: ${cart.reduce((ca,pr) =>{
          return ca + pr.quantity;
        } )}</p>
        <p>Total Price: ${cart.reduce((ca, pr) =>{
          return ca + pr.quantity * pr.price;
        } )}</p>
        <button onClick={handleBuy}>Buy</button>
      </div>
    </>
  );
  
}

export default Cart;