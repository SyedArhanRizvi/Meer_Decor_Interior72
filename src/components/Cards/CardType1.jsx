import React from "react";
import "../Cards/CardType1.css";
import Btn from "../btns/Btn";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/features/cartSlice";

function Card({ item }) {
  // const cart = useSelector((e) => e?.cart?.terms);
  // console.log(cart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    console.log(item);
    dispatch(addToCart(item));
  };

  return (
    <div className="ct1">
      <div className="img">
        <img src={item.img} alt="" />
      </div>
      <div className="btnstitles">
        <p>{item.name}</p>
        <p>${item.price}</p>
        <Btn onClick={() => handleAdd(item)}></Btn>
      </div>
    </div>
  );
}

export default Card;
