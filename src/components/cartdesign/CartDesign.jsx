import React from 'react'
// import { useSelector } from 'react-redux';
import "../cartdesign/CartDesign.css"
function CartDesign({name, img, price}) {
  //  const cart = useSelector((e) => e?.cart?.value);
  // console.log(cart);
  return (
    <div className='itemCartCard'>
      <div className="img"><img src={img} alt="" /></div>
      <div className="itemCartDetails">
        <div className="itemCartPrice">Price is {price}</div>
        <div className="itemCartName">{name}</div>
        <div className="itemCartDesc"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sapiente, tempore eum iusto eligendi pariatur, vel iste distinctio quae ipsum ratione recusandae quibusdam, illo ipsam fugit minus architecto atque. Voluptatem!</p></div>

      </div>
    </div>
  )
}

export default CartDesign
