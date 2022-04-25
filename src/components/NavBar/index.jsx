import React from 'react';
import './NavBar.css';
import logo from './logo.png';
import CartWidget from '../CartWidget';

function NavBar(props) {
    return (
        <div className='nav'>
            <img src={logo} alt='logo' className='nav-logo'/>
            <ul className='nav-menu'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Nosotros</a></li>
                <li><a href='#'>Contacto</a></li>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;