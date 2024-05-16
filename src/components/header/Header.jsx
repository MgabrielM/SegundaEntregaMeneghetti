import React from 'react'
import { Carrito } from './Carrito'
import { NavBar } from './NavBar'

export const Header = () => {
  return (
    <header className='header'>
        <h1>GaboShop</h1>
        <NavBar/>
        <Carrito/>
    </header>
    
  )
}
