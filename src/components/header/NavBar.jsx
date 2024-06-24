import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { db } from '../../firebase/config';

export const NavBar = () => {

  let [categoria, setCategoria] = useState([]);

  useEffect (() => {
    const categoriaRef = collection(db, "categorias");

    getDocs(categoriaRef)
    .then((res) =>
    {
      setCategoria(
        res.docs.map((doc)=>{
          return {
            ...doc.data() , id: doc.id
          }
        }
      )
    )
  }    
  )   
},[]);

  return (        
        <nav className='nav'>
            <ul className='nav-menu'>
              <li>
              <NavLink to="/SegundaEntregaMeneghetti" className='nav-link' >Inicio</NavLink>
              </li>
              {
                categoria.map((cat) => {
                  return(
                    <li key={cat.id}>
                      <NavLink to={`/category/${cat.id}`} className='nav-link' >{cat.nombre}</NavLink>
                    </li>
                  )
                })
              }
            </ul>            
        </nav>
  )
}
