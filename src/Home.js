import React from 'react'
import './Home.css'
import Product from './Product'
import Fade from 'react-reveal/Fade';


function Home() {


  return (
    <div  className="home">
            <div className="home__container">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>

       <Fade bottom delay={0} duration={1500}>
        <div className="home__row">
                <Product
                
                id = "01"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
                 price={29.99} 
                 rating={3}
                 image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
                />

                <Product
                
                id = "02"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl" 
                 price={89.99} 
                 rating={3}
                 image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                />
                <Product
                 
                id = "03"
                title="FitBit Band Smart Band - Black (4th Generation)" 
                 price={15.99} 
                 rating={4}
                 image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                />
                
            </div>
            </Fade>

    
     <Fade bottom delay={0} duration={1500}>
    <div  className="home__row">
        <Product
                id = "04"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor " 
                 price={499.99} 
                 rating={3}
                 image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
            </div>

</Fade>

            <Fade bottom delay={0} duration={1500}>
         <div className="home__row">
         <Product
                id = "05"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric" 
                 price={59.99} 
                 rating={4}
                 image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                />
                
                <Product
                id = "06"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" 
                price={29.99} 
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg"
                />

             </div>

             </Fade>

             <div className="home__footer">

             <div className="footer__columns">
             <h4>Get To Know Us</h4>
              <p>Careers</p>
              <p>Blog</p>
              <p>About Amazon</p>


              </div>

              <div className="footer__columns">
              <h4>Amazon Payment Product</h4>
              <p>Careers</p>
              <p>Blog</p>
              <p>About Amazon</p>


              <img className="footer__image" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>




                </div>


                <div className="footer__columns">
                <h4>Let Us Help You</h4>
              <p>Careers</p>
              <p>Blog</p>
              <p>About Amazon</p>


                </div>

                

             </div>
            


            </div>
      
    </div>
  )
}

export default Home
