import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (        
        <nav className='nav'>
            <ul className='nav-menu'>
              <li>
              <NavLink to="/SegundaEntregaMeneghetti" className='nav-link' >Inicio</NavLink>
              </li>
              {/* {
                clasificacion.map((categoria) => {
                  return(
                    <li key={categoria.id}>
                      <NavLink to={`/category/${categoria.id}`} className='nav-link' >{categoria.nombre}</NavLink>
                    </li>
                  )
                })
              } */}
            </ul>            
        </nav>
  )
}
