import React from 'react'
import { Link } from 'react-router-dom'
import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import image4 from "../images/4.jpg";
import image5 from "../images/5.jpg";
import image6 from "../images/6.jpg";
import image7 from "../images/7.jpg";

  
  export const Item = ({ producto }) => {

    const images = {
        1: image1,
        2: image2,
        3: image3,
        4: image4,
        5: image5,
        6: image6,
        7: image7,
      };

    return (
      <div className="producto">
        <img src={images[producto.id]} alt={`Imagen de ${producto.nombre}`} />
        <h2>{producto.nombre}</h2>
        <h2>{producto.marca}</h2>
        <p>{producto.clasificacion}</p>
        <Link to={`/item/${producto.id}`}>Ver más</Link>
      </div>
    );
  };