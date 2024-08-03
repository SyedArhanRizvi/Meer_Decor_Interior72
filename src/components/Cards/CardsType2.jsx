import React from 'react'
import Btn from '../btns/Btn'
import './CardsType2.css'
 import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/features/cartSlice";
function CardsType2({item}) {
 
  // name={item.name} title={item.title} price={item.price} img={item.img} date={item.endsDate}
  // const cart = useSelector((e) => e?.cart?.terms);
  // console.log(cart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    console.log(item);
    dispatch(addToCart(item));
  };
  return (
    <div className='ct2'>

      <div className="img"><img src={item.img} alt="" /></div>
      <div className="ct2d1">
        <p>{item.name}</p>
        <Btn onClick={() => handleAdd(item)}></Btn>
      </div>
      <div className="ct2d2">
        <h4>{item.title}</h4>
        <p>${item.price}</p>
      </div>

    </div>
  )
}

export default CardsType2
