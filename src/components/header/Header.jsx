import React from 'react'
import { Carrito } from './Carrito'
import { NavBar } from './NavBar'
import tituloLogo from '../../images/logo.png'
import { Link } from 'react-router-dom'


export const Header = ({valorModificado}) => {

  return (
    <header className='header'>
      <div className='header-contenedor'>
          <Link to="/" className='header-contenedor-logo'><img src={tituloLogo} className='titulo-logo'/></Link>
          <NavBar/>
          <Carrito valor={valorModificado}/>
      </div>        
    </header>    
  )
}
