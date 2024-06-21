import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import "../css/style.css"
import { Link } from 'react-router-dom';
import Toastify from 'toastify-js'

export const Carrito = () => {  

  const {carrito, vaciarCarrito} = useContext(CartContext);
  console.log(carrito);

  const botonVaciarCarrito = () =>{
    vaciarCarrito();
    notificacioCarritoVaciado();
  }

  const notificacioCarritoVaciado = () => 
    Toastify({
      text: "Su carrito se ha vaciado.", 
      duration: 3000,
      gravity: "bottom", // `top` or `bottom`
      position: "left", // `left`, `center` or `right`
      style: {
        background: "red",
        width: "250px",
      },
    }).showToast();;
  
  return (
    <div className='carrito-contenedor'>
      <h3>Productos</h3>
      {carrito.length > 0 ?
        <>
          <div>
            {(carrito) ? carrito.map((prod) => <h4>{prod.nombre} {prod.precio}</h4>) : "Carrito vacio"}      
            <button onClick={botonVaciarCarrito}>Vaciar carrito</button>
          </div>
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
