import React from 'react'
import './Loader.css'

const Loader = () => {
  return (
      <div class='lds-ring-container'>
          <div class="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
  )
}

export default Loader