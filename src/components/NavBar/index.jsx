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
                {/* <li><a href='#'>Home</a></li>
                <li><a href='#'>Productos</a></li>
                <li><a href='#'>Nosotros</a></li>
                <li><a href='#'>Contacto</a></li> */}
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/catalogo'}>Productos</Link></li>
                <li><Link to={'/detalle'}>Nosotros</Link></li>
                <li><Link to={'/'}>Contacto</Link></li>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;