import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { getPurchasesThunk } from '../store/slices/purchases.slices';
// import PurchasesCard from '../components/purchases/PurchasesCard';
// import './styles/purchases.css';


const Purchases = () => {

  const Purchases = useSelector(state => state.purchases);
 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPurchasesThunk());
}, []);

  // console.log(Purchases);

  return (
    <div className='purchases'>
      {
        <PurchasesCard
        key={Profiler.id}
        prod={prod}
        />
      }
    </div>
  )
}

export default Purchases;

