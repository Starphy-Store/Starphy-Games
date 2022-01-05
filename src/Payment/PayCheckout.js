import React, { useState } from "react"
import Payment from "./Payment"

export default function PayCheckout(){
    const [checkout, setCheckOut] = useState(false);

    return(
        <div className="paycheckout">
            {checkout ? (
                <Payment></Payment>
            ) : (
                <button 
                onClick={() =>{
                    setCheckOut(true);
                }}
                >
                Checkout
            </button>
            )}
            </div>           
    );
}