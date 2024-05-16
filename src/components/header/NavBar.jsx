import React from 'react'
import { Carrito } from './Carrito'

export const NavBar = () => {
  return (        
        <nav className='nav'>
            <ul className='nav-menu'>
                <li><a className='nav-link' href="#">Inicio</a></li>
                <li><a className='nav-link' href="#">Celulares</a></li>
                <li><a className='nav-link' href="#">Auriculares</a></li>
                <li><a className='nav-link' href="#">Contacto</a></li>
            </ul>
        </nav>
  )
}
