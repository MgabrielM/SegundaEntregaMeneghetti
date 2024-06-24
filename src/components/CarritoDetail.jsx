import React, { useContext, useState, useRef, useEffect } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm} from "react-hook-form";
import { Timestamp, addDoc, collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from "../firebase/config"


export const CarritoDetail = () => {

    const {carrito,calcularCantidadTotalCarrito, vaciarCarrito } = useContext(CartContext);
    const {register, handleSubmit} = useForm();
    let [docId, setDocId] = useState("");
    let [pedidos, setPedidos] = useState([]);

    const comprar = (data) =>{
      const fecha = new Date();

      const pedido = {
        cliente: data,
        productos: carrito,
        fechaCreacion: Timestamp.now(),
        cantidadTotal: calcularCantidadTotalCarrito(),
        estado: "En reparto"
      }

      const cargarPedidoRef = collection(db,"pedidos");
      addDoc(cargarPedidoRef, pedido)
      .then((doc) => {
        setDocId(doc.id);
        vaciarCarrito();
      })
    }

    // useEffect(()=>{
    //   const pedidosRef = doc(db, "pedidos", docId);
    //       getDoc(pedidosRef)
    //         .then((res) => 
    //         setPedidos(({ ...res.data() , idf: res.id }))
    //       )

    //       console.log(...pedidos);
    //     }  
    //   ), []

  return (

    <>
      {docId ?  
      <div>        
        <div>
          Muchas gracias por realizar la compra. El numero de pedido creado es: {docId}
        </div>
        
      </div>
      :
      <div className='contenedor-carritodetail'>

            <div className="form-container">
              <form onSubmit={handleSubmit(comprar)}>
                <h5>FINALIZAR COMPRA</h5>
                <p>Es necesario completar el siguiente formulario para poder finalizar la compra</p>
                <h6>Nombre</h6>
                <input type="text" placeholder="Ingresar nombre" {...register("nombre")} />
                <h6>Correo electrónico</h6>
                <input type="email" placeholder="Ingresar correo" {...register("correo")} />
                <button type="submit">FINALIZAR COMPRA</button>
              </form>
            </div>
      </div>
      }

      <div>
        Historial de pedidos creados:
      </div>
    </>
  )
}
