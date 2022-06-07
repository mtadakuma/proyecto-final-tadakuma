import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>Created with <FontAwesomeIcon icon={faHeart} /> by Miguel Angel Tadakuma 2022</div>
  )
}

export default Footer