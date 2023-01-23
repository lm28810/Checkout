import React from 'react'
import Hero from './images/Hero.svg'
import music from './images/icon-music.svg'
import './Card.css'


function Card() {
  return (
      <div className='Card-container'>
          <div className='Card-container-content'>
              <div>
                   <img className='image1' src={Hero} alt="nothing" />
                  {/* <h1>Image Here</h1> */}
              </div>
              <div>
                  <h2>Order Summary </h2>
                  <p className='Card-container-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. laboriosam?</p>
              </div>
              <div className='Card-container-details'>
             
                  <div >
                      <img className="Image2"src={music} alt="" srcset="" />
                 </div>
                  <div>
                      <h3 className='Plan'>Annual Plan </h3>
                      <p className='Price'>$59.75 per/Year</p>
                      </div>
                  <div>
                  
                      <a className='change' href=""><p>Change</p></a>
                  </div>
              </div>
              <div>
            
                  <button>
                       Proceed to Payment
                  </button>
              </div>

              <a href="http://" ><p className='Card-container-link2'>Cancel Order</p></a> 

          </div>
          
    </div>
  )
}

export default Card