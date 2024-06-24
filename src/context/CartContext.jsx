import { createContext, useEffect, useState } from "react";
import image1 from "../../public/images/1.jpg";
import image2 from "../../public/images/2.jpg";
import image3 from "../../public/images/3.jpg";
import image4 from "../../public/images/4.jpg";
import image5 from "../../public/images/5.jpg";
import image6 from "../../public/images/6.jpg";
import image7 from "../../public/images/7.jpg";
import image8 from "../../public/images/8.jpg";


export const CartContext = createContext();

export const CartProvider = ({children}) =>{

    const [carrito, setCarrito] = useState([]);

    const images = {
      1: image1,
      2: image2,
      3: image3,
      4: image4,
      5: image5,
      6: image6,
      7: image7,
      8: image8
    }

    const notificacionItemCargado = () => 
      Toastify({
        text: "Se ha cargado el item.", 
        duration: 3000,
        gravity: "bottom", 
        position: "left", 
        style: {
          background: "green",
          width: "250px",
        },
      }).showToast();;
 
    const handlerCarrito = (producto) =>{

      notificacionItemCargado();

    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].id === producto.id) {
        const nuevoCarrito = [...carrito];
        nuevoCarrito[i].cantidad++;
        setCarrito(nuevoCarrito);
        console.log(nuevoCarrito);
        return; 
      }
    } 
      producto.cantidad = 1;
      setCarrito([...carrito, producto]);
      actualizarCantidad();        
    }

    useEffect(() => {
            
      if (carrito){
        let nuevoCarrito = [...carrito];
        localStorage.setItem("CarritoTemporal", JSON.stringify(nuevoCarrito))
      }  

    }, [handlerCarrito]);

    const actualizarCantidad = () =>{
      let cantidad = 0;

      if (carrito){
        for (let i = 0; i < carrito.length; i++){
          cantidad = carrito[i].cantidad + cantidad;
        }
      }

      return cantidad;
    }

    const actualizarPrecio = () =>{

      if (carrito){
        for (let i = 0; i < carrito.length; i++){
          carrito[i].precioTotal = carrito[i].cantidad * carrito[i].precio;
        }
      }
    }
  
    const calcularCantidadTotalCarrito = () =>{    
      actualizarPrecio();
      return carrito.reduce((acc, num) => acc + num.precioTotal, 0);
    }
  
    const vaciarCarrito = () =>{
      setCarrito([]);
    }

    return(
        <CartContext.Provider value={{carrito, images, setCarrito, handlerCarrito, actualizarCantidad, calcularCantidadTotalCarrito, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )

}