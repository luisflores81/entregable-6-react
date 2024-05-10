import React from 'react';

const PurchasesCard = ({prod}) => {

  console.log(prod);

  return (
   <article className='purchasecar'>
    <h3 className='purchase__title'>{prod.product?.title}</h3>
    <figure className='purchase__img'>
        <image src={prod.product?.productImgs[0].url}
        alt="product image" />
    </figure>
    <p className='purchasecard__date'>{prod.updateArt}?.slice(0, 10) </p>
    <span className='purchasecard__quantity'>{prod.quantity}</span>
     <span className='purchasecard__price'>Total price: ${prod?.price}</span>
  
   </article> 
   


  )
}

export default PurchasesCard;