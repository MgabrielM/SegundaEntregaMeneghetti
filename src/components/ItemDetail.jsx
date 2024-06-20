import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

export const ItemDetail = ({producto}) => {

    const { images, handlerCarrito } = useContext(CartContext);        

    const agregarProductosAlCarrito = () =>{
      handlerCarrito(producto);
    }

  return (
    <div className='contenedor-informacion-producto'>
        <img src={images[producto.id]} className='producto-imagen' />        
        <div className='producto-detalle'>
            <h1>{producto.marca}</h1>
            <h2>{producto.nombre}</h2>
            <h3>Categoria: {producto.clasificacion}</h3>
            <p>{producto.detalle}</p>
            <button onClick={agregarProductosAlCarrito}>Agregar producto al carrito</button>
            <Link to="/" >Volver</Link>
        </div>      
    </div>
  )  
}
