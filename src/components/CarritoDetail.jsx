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
        console.log(pedidos);
      })
    }

    useEffect(()=>{
      const productosRef = collection(db, "pedidos");
      getDocs(productosRef)
        .then((res) => 
          setPedidos(
            res.docs.map((doc)=>
              {
                return {...doc.data(), id: doc.id}              
              }
          )
      )      
      
      )}), [pedidos]


      const formatearFecha = (timestamp) => {
        
        if (timestamp) {
          const date = timestamp.toDate(); 
          return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        } else{          
          "No es posible mostrar la fecha de creación."
        }
      };

  return (

    <>
      {docId ?  
      <div className='contenedor-aviso'>
        <div  className='aviso-texto'>
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
      <div className='contenedor-pedidos-creados'>  
        <h2>HISTORIAL DE PEDIDOS CREADOS</h2>        
        {pedidos ?
          pedidos.slice(0, 3).map((ped, index) => (
            <div className='historial-pedidos-creados' key={index}>
              <div>ID: {ped.id}</div>
              <div>Precio: {ped.cantidadTotal}</div>
              <div>Estado: {ped.estado}</div>
              <div>Fecha de creación: {formatearFecha(ped.fechaCreacion)}</div>
            </div>
          )) : "Sin historial de pedidos creados."}
      </div>
  </>
  )
}
