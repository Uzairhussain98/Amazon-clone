 import React from 'react'
 import './Subtotal.css'
 import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';

 
 function Subtotal() {

    const[{basket}, dispatch] = useStateValue();

    const calculateTotal = (basket) => {
        return basket.reduce((price, item) => item.price + price, 0)
    }



   return (
     <div className="subtotal">
         <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket?.length} items) :{" "}
              <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains gift.
            </small>
          </div>
        )}
        decimalScale={2}
        value={calculateTotal(basket)}
        displayType={"text"}
        thousanSeparator={true}
        prefix={"$"}
      />
            <button>Proced to Checkout</button>

     </div>
   )
 }
 
 export default Subtotal
 