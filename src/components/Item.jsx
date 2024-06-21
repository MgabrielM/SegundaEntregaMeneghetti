import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';

  
export const Item = ({producto}) => {

  const {handlerCarrito, images} = useContext(CartContext);
  
    if (!producto) {
      return null;
    }
      
    const agregarProductosAlCarrito = () =>{
      handlerCarrito(producto);
    }

      
    return (
      <div key={producto.id} className="producto">
        <img src={images[producto.imagen]} alt={`Imagen de ${producto.nombre}`} />
        <div className='producto-descripcion'>
          <h2>{producto.nombre}</h2>
          <h3>Marca: {producto.marca}</h3>          
          <p>Categoria: {producto.clasificacion}</p>
          <Link to={`/item/${producto.id}`}  producto={{producto}}>Mas información [+]</Link>
          <button onClick={agregarProductosAlCarrito}>Agregar al carrito</button>
        </div>
      </div>
    );
  };