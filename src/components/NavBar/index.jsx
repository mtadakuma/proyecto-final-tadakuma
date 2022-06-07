import React from 'react';
import './NavBar.css';
import logo from './logo.png';
import CartWidget from '../CartWidget';
import { Link, NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <div className='nav'>
            <li><Link to={'/'}><img src={logo} alt='logo' className='nav-logo'/></Link></li>
            <ul className='nav-menu'>
                <li><NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink></li>
                <li><NavLink to={'/catalogo/computers'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Computers</NavLink></li>
                <li><NavLink to={'/catalogo/smartphones'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Smartphones</NavLink></li>
                <li><NavLink to={'/catalogo/screens'} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Screens</NavLink></li>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;