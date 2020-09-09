import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className="home">
            <div className="home__container">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

        <div className="home__row">
                <Product
                title="The Lean Startup" 
                 price={29.99} 
                 rating={3}
                 image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                />

                <Product
                title="Kenwood kMix Stand Mixer" 
                 price={89.99} 
                 rating={3}
                 image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
                <Product
                title="FitBit band" 
                 price={15.99} 
                 rating={3}
                 image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                
            </div>

        <div className="home__row">
        <Product
                title="Samsung LED Monitor " 
                 price={499.99} 
                 rating={3}
                 image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div>

         <div className="home__row">
         <Product
                title="Amazon Echo" 
                 price={29.99} 
                 rating={3}
                 image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                
                <Product
                title="New Apple iPad Pro" 
                 price={29.99} 
                 rating={5}
                 image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
                />

             </div>



            </div>
      
    </div>
  )
}

export default Home