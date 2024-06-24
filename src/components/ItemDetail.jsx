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
        <img src={images[producto.imagen]} className='producto-imagen' />        
        <div className='producto-detalle'>
            <h1>{producto.marca}</h1>
            <h2>{producto.nombre}</h2>
            <h3>Categoria: {producto.clasificacion}</h3>
            <p>{producto.detalle}</p>
            <div>
              <Link to="/SegundaEntregaMeneghetti" className= "boton-finalizar rojo">Volver</Link>
              <button className="boton-finalizar verde" onClick={agregarProductosAlCarrito}>Agregar producto al carrito</button>              
            </div>
        </div>      
    </div>
  )  
}
