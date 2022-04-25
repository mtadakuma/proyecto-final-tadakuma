import React from 'react'

const Button = (props) => {
    console.log(props)
    return (
        <>
        <input type='text'></input>
            <button>{ props.texto }</button>
      </>
   
  )
}

export default Button