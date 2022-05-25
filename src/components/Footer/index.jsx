import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>Creado con <FontAwesomeIcon icon={faHeart} /> por Miguel Angel Tadakuma 2022</div>
  )
}

export default Footer