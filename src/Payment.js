
import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import { db } from "./firebase";







function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();

    const history = useHistory();


    const handleSubmit = async (event) => {
        // do all the fancy stripe stuff...
        event.preventDefault();

            // paymentIntent = payment confirmation
            
        
       



            if (basket.length >0 ) {
                


                      history.replace('/orders')
            
                dispatch({
                    type: 'EMPTY_BASKET'
                })


            
            }
            
        
            else{
                alert("enter items")
            }
         
            }
    
        
    

    
  return (
    <div className='payment'>
    <div className='payment__container'>
        <h1>
            Checkout (
                <Link to="/checkout">{basket?.length} items</Link>
                )
        </h1>


        {/* Payment section - delivery address */}
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Delivery Address</h3>
            </div>
            <div className='payment__address'>
                <p>{user?.email}</p>
                <p>123 React Lane</p>
                <p>Los Angeles, CA</p>
            </div>
        </div>

        {/* Payment section - Review Items */}
        <div className='payment__section'>
            <div className='payment__title'>
                <h3>Review items and delivery</h3>
            </div>
            <div className='payment__items'>
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </div>
    

        {/* Payment section - Payment method */}
        <div className='payment__section'>
            <div className="payment__title">
                <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
                    {/* Stripe magic will go */}

                    <form onSubmit={handleSubmit}>

                        <div className='payment__priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                            <button >
                                <span> "Buy Now"</span>
                            </button>
                        </div>

                          {/* Errors */}
                    </form>
            </div>
        </div>
    </div>
</div>
  )
                                           
                                }
export default Payment
