import { useState } from 'react'
import {Header, ProductGallery, ProductFeatures, Thumb} from './components'
import './App.css'

const colors = ['amber', 'charcoal', 'red']

function App() {
  const [selectedColor, setselectedColor] = useState(0)

  const setColor = index => {
    
    setselectedColor(index)
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="product__wrapper">
          <section className="product">
            <div className="product__misc-info">
              <p>
                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 5.54545V7.81818H11V5.54545C11 2.13636 9.29167 1 7 1C4.70833 1 3 2.13636 3 5.54545Z" stroke="#0547A0" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M0 9C0 7.89543 0.895431 7 2 7H12C13.1046 7 14 7.89543 14 9V18C14 19.1046 13.1046 20 12 20H2C0.89543 20 0 19.1046 0 18V9Z" fill="#0547A0"/>
                </svg>
                <span>Secure checkout</span>
              </p>
              <p>Ships in 5-7 business days</p>
            </div>
            <ProductGallery selectedColor={selectedColor} colors={colors} />
            <ProductFeatures />
          </section>
          <section className="product__details">
            <h1>Teh Sofa</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dui interdum, tincidunt velit sit amet.</p>
            <div className="product__details-pay-box">
              <div>
                <span>Pay now</span>
                <span className="pay-important">$1,250</span>
                <span className="prev-price">$,1450</span>
                <small>$200 off with code</small>
              </div>
              <div>
                <span>Pay as low as</span>
                <span className="pay-important">$25<span>/month</span></span>
                <span>width Klarna</span>
                <small><a href="#">Learn More</a></small>
              </div>
            </div>
            <div className="product__details-ctas">
              <button className="btn-primary">Add to cart</button>
              <button className="btn-link">Save design for later</button>
            </div>
            <div className="product__details-design">
              <p className="design-step">1. Choose a fabric</p>
              <p>Choose your choice from fabrics to leather.</p>
              <p className="design-step-title">Fabric choices</p>
              <div className="product__details-design-thumbs">
                {colors.map((color, index) => <Thumb key={index} i={index} color={color} setColor={setColor} />)}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App

