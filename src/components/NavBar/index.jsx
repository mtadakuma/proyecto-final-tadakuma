import React from 'react';
import './NavBar.css';
import logo from './logo.png';
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div className='nav'>
            <li><Link to={'/'}><img src={logo} alt='logo' className='nav-logo'/></Link></li>
            <ul className='nav-menu'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/catalogo/computers'}>Computadoras</Link></li>
                <li><Link to={'/catalogo/smartphones'}>Smartphones</Link></li>
                <li><Link to={'/catalogo/screens'}>Pantallas</Link></li>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;