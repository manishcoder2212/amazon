import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
           <div className="home__container">
               <img
               className="home__image"
               src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Dice-Media--MBBS-Web-series---Graphics_1500x600._CB665960832_.jpg"
               />

               <div className="home__row">
                  <Product/>
               
                   
               </div>

               <div className="home__row">
                   {/* product */}
                   {/* product */}
                   {/* product */}

               </div>

                <div className="home__row">
                   {/* product */}
                   
               </div>
        </div> 
        </div>
    )
}

export default Home
