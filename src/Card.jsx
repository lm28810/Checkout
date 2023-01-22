import React from 'react'
import './Card.css'
function Card() {
  return (
      <div className='Card-container'>
          <div className='Card-container-content'>
              <div>
                   <h1>image here</h1>
              </div>
              <div>
                  <h2>Order Summary </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, temporibus pariatur voluptatibus officia quasi consequuntur dolore vero eius itaque quibusdam ad beatae nihil soluta inventore suscipit assumenda numquam voluptatum laboriosam?</p>
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