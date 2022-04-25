import React from 'react'

const Button2 = ({ texto, color, onRead, lista, objeto, children}) => {
  return (
    <>
          <input type='text' />
          <button onClick={() => onRead(document.querySelector('input').value)} style={{ color: color }}>{texto ? texto : 'Boton'}</button>
          {
              lista?.map(m => <p>{ m }</p>)
          }
          <p>{objeto?.curso}</p>
          <p>{objeto?.comision}</p>
          <p>{objeto?.dias}</p>
          <p>{objeto?.hora}</p>
          {children}
    </>
  )
}

export default Button2