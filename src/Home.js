import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="Home_container">
                <img className="home_image"
                    src='https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NDRiMzY4NTIt/NDRiMzY4NTIt-ZWI5NjdhN2It-w1500._CB658619072_.jpg' alt="" />
            </div>
            <div className="home__row">
          <Product
            id="12321341"
            title="Bluetooth Over-Ear Headphones, Zihnic Foldable Wireless and Wired Stereo Headset Micro SD/TF, FM for Cell Phone,PC,Soft Earmuffs &Light Weight for Prolonged Waring (Rose Gold)The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={25.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/51eAhFCg5mL._AC_UY218_.jpg"
          />
          <Product
            id="49538094"
            title="Anker Soundcore Life Q20 Hybrid Active Noise Cancelling Headphones, Wireless Over Ear Bluetooth Headphones, 40H Playtime, Hi-Res Audio, Deep Bass, Memory Foam Ear CupsKenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={49.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61oXrwTm1uL._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="A riveting, deeply personal account of history in the making—from the president who inspired us to believe in the power of democracy"
            price={17.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/91D5xAOAVjL.SR160,240_BG243,243,243.jpg"
          />
          <Product  
          id="4903850"
          title="The Sign and the Seal: The Quest for the Lost Ark of the Covenant"
          price={16.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/81QM36JUBJL._AC_UY218_.jpg"
          />
          <Product
            id="23445930"
            title="The master of the legal thriller probes the savage depths of racial violence in this searing courtroom drama featuring the beloved Jake Brigance"
            price={9.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/912F7UOH1gL.SR160,240_BG243,243,243.jpg"
          />
          {/* <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          /> */}
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)"
            price={547.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Consumer_Electronics/XCM_Manual_1307087_1569228_US_us_ce_showcase_3666666_1500x440_en_US.jpg"
          />
        </div>
      </div>
        
    )
}

export default Home
