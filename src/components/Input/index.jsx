import React from 'react'

const Input = ({ handleExtraer}) => {
  return (
      <div>
          <input id='input-1' type='text'/>
          <button onClick={() => handleExtraer(document.querySelector('#input-1').value)}>Extraer Valor</button>
    </div>
  )
}

export default Input