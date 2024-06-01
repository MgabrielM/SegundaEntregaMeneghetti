import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpg";
import image8 from "../images/8.jpg";

  
  export const Item = ({producto}) => {

    const images = {
        1: image1,
        2: image2,
        3: image3,
        4: image4,
        5: image5,
        6: image6,
        7: image7,
        8: image8
      };
      
      if (!producto) {
        return null;
      }
    
      const { id, nombre, marca, clasificacion } = producto;
    
      return (
        <div className="producto">
          <img src={images[id]} alt={`Imagen de ${nombre}`} />
          <div className='producto-descripcion'>
            <h2>{nombre}</h2>
            <h3>Marca: {marca}</h3>          
            <p>Categoria: {clasificacion}</p>
            <Link to={`/item/${id}`}>Mas información [+]</Link>
          </div>
        </div>
      );
    };