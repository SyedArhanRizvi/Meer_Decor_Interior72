import React from 'react'
import Btn from '../btns/Btn'
import './CardsType3.css'
  import { useSelector, useDispatch } from "react-redux";
  import { addToCart } from "../store/features/cartSlice";
  
function CardsType3({item}) {

   //name={item.title} date={item.price} img={item.img}
    // name={item.name} title={item.title} price={item.price} img={item.img} date={item.endsDate}
    // const cart = useSelector((e) => e?.cart?.terms);
    // console.log(cart);
    const dispatch = useDispatch();
  
    const handleAdd = (item) => {
      console.log(item);
      dispatch(addToCart(item));
    }

  return (
    <div className='ct3'>
      <div className="img"><img src={item.img} alt="" /></div>

      <div className="det">
        <div className="na"><h1>{item.title}</h1></div>
        <div className="nm">
        <Btn onClick={() => handleAdd(item)}></Btn>
            <p>{item.price}</p>
        </div>
      </div>
    </div>
  )
}

export default CardsType3
