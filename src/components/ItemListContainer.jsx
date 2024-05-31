import React, {useEffect, useState } from 'react';
import { productos } from "../data/db.json";
import { clasificacion } from "../data/db.json";
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';

export const ItemListContainer = () => {

  let {categoryId} = useParams();
  let [producto, setProductos] = useState([]);
  let [titulo, setTitulo] = useState("Productos");
  
  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    })
  }

  useEffect(() => {
    
    pedirProductos()
      .then((res) => {
        if (!categoryId) {
          setTitulo("Productos");
          setProductos(res);
        } else {
          setTitulo(clasificacion.find((cat) => cat.id === categoryId).nombre);
          setProductos(res.filter((prod) => prod.clasificacion === categoryId));
        }
      })
      
  }, [categoryId]);

  

  return (
    <div className='productos-contenedor'>
      <h1>{titulo}</h1>
      <ItemList producto={producto} />      
    </div>
  )
}