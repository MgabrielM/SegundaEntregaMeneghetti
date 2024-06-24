import React from 'react'
import { CartWidget } from './CartWidget'
import { NavBar } from './NavBar'
import tituloLogo from "../../../public/images/logo.png";
import { Link } from 'react-router-dom'


export const Header = () => {

  return (
    <header className='header'>
      <div className='header-contenedor'>
          <Link to="/SegundaEntregaMeneghetti" className='header-contenedor-logo'><img src={tituloLogo} className='titulo-logo'/></Link>
          <NavBar/>
          <Link className='header-contenedor-carrito' to="../Carrito" >
            <CartWidget/>
          </Link>
      </div>        
    </header>    
  )
}
