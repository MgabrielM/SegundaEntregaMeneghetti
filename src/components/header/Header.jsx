import React from 'react'
import { Carrito } from './Carrito'
import { NavBar } from './NavBar'
import tituloLogo from '../../images/tituloLogo.png'

export const Header = ({valorModificado}) => {


  return (
    <header className='header'>
        <a href="./index.html"><img src={tituloLogo} className='titulo-logo'/></a>
        <NavBar/>
        <Carrito valor={valorModificado}/>
    </header>    
  )
}
