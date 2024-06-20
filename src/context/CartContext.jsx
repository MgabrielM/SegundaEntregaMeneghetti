import { createContext, useState } from "react";
import image1 from "../../public/images/1.jpg";
import image2 from "../../public/images/2.jpg";
import image3 from "../../public/images/3.jpg";
import image4 from "../../public/images/4.jpg";
import image5 from "../../public/images/5.jpg";
import image6 from "../../public/images/6.jpg";
import image7 from "../../public/images/7hrYiODM1Gecf8aoWvnE.jpg";
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
  
    const handlerCarrito = (producto) =>{
      setCarrito([...carrito, producto]);   
      actualizarCantidad ();
    }
  
    const actualizarCantidad = () =>{
      return carrito.length;
    }
  
    const calcularCantidadTotalCarrito = () =>{    ;
      return carrito.reduce((acc, num) => acc + num.precio, 0);
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