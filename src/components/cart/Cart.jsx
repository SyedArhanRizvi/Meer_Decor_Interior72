import React from 'react'
import CartDesign from '../cartdesign/CartDesign'
import { useState } from 'react';
import '../cart/Cart.css'
import { useSelector } from 'react-redux';
import PaymentSummary from './PaymentSummary';
function Cart() {
  
  const cart = useSelector((e) => e?.cart?.value);
  // setLength(cart.length);
  // console.log();

  // console.log(cart);
  return (
    <section>
      <div className="allItemsBar">
        <div className="cartCards">
        <div className="headDetails">
            <div className="name"><h1>Shopping Bag</h1></div><hr />
            <div className="itemsCount"><h1>Total Items is (0)</h1></div>
        </div>
        <div className='cards'>
          {
            cart.map((item)=>{
              console.log(item);
              return <CartDesign name={item.title} img={item.img} price={item.price}></CartDesign>
            })
          }
          </div>
                
        </div>
         <div className="paymentBar">
           < PaymentSummary/>
            
         </div>
      </div>
     
    </section>
  )
}

export default Cart
