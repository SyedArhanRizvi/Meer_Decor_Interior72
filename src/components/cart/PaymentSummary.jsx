import React, { useEffect } from 'react'
import "../cart/PaymentSummary.css"
// import { useState } from 'react';
function PaymentSummary() {
    // const [amount, setAmount] = useState(0);
    // useEffect(()=>{
    //     price.splice(0,1);
    //     // console.log(price);
    //     // setAmount(price);
    // }, [price])
    // console.log(price);
  return (
    <div className='summary'>
        <div className='sname'>
            <h1>Summary</h1>
        </div>
        <div className="total">
            <div className="subtotal">
                <div><h3>Sub Total</h3></div>
                <div><h3>0</h3></div>
            </div>
            <div className="txes">
                <div><p>Estimated Tax</p></div>
                <div><p>total tax is </p></div>
            </div>
            <div className="shipingCoast">
                <div><p>Estimated Shipping</p></div>
                <div>Shipping Cost is </div>
            </div>
            <div className="calTotal">
                <div><h3>Estimated Total is :</h3></div>
                <div><h3>Total Cost is</h3></div>
            </div>
        </div>
        <div className="paymentMethod">
            <div className="Checkout"><button>Check Out Now</button></div>
            <div className='or'><h3>Or</h3></div>
            <div className="paytm">
                <div className="PaytmImg"><img src="" alt="" /></div>
                <div className="phonePayImg"><img src="" alt="" /></div>
            </div>
        </div>
    </div>
  )
}

export default PaymentSummary
