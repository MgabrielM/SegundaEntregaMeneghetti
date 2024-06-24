import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import "../css/style.css"
import { Link, useNavigate } from 'react-router-dom';
import Toastify from 'toastify-js';


export const Carrito = () => {  

  const {setCarrito, carrito, vaciarCarrito, calcularCantidadTotalCarrito} = useContext(CartContext);

  const botonVaciarCarrito = () =>{
    vaciarCarrito();
    notificacioCarritoVaciado();
  }

  const notificacioCarritoVaciado = () => 
    Toastify({
      text: "Su carrito se ha vaciado.", 
      duration: 3000,
      gravity: "bottom", 
      position: "left", 
      style: {
        background: "red",
        width: "250px",
      },
    }).showToast();;

    const eliminarItem = (id) => {
      setCarrito(carrito.filter(prod => prod.id !== id));
    };
  
  return (
    <div className='carrito-contenedor'>
      <h4>Productos</h4>
      {carrito.length > 0 ?
        <>
            {(carrito) ? carrito.map((prod) => 
            <div className='contenedor-carrito-visualizacion'>
              <button className='boton-anular' onClick={ () => eliminarItem(prod.id)}>Anular</button>
              <h6>Cant. {prod.cantidad} - {prod.nombre} - Precio total: {prod.precio}</h6>              
            </div>
            ) : "Carrito vacio"}      
        
            <h5>Total: {calcularCantidadTotalCarrito()}</h5>
            <Link to="/CarritoDetail" className= "boton-finalizar ">Finalizar compra</Link>
            <button className="boton-cancelar" onClick={botonVaciarCarrito}>Vaciar carrito</button>
        </>
        :
        <>
          <h6>Usted no tiene productos agreagados al carrito.</h6>
          <h6>Vea nuestro catalogo de productos <Link to="/SegundaEntregaMeneghetti">aquí</Link>.</h6>
        </>
    }      
    </div>
  )
}
