import React, {useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { db } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

export const ItemListContainer = () => {

  let {categoryId} = useParams();
  let [producto, setProductos] = useState([]);
  let [titulo, setTitulo] = useState("Productos");

  useEffect(() => {    
    const productosRef = collection(db, "Productos");
    getDocs(productosRef)
      .then((res) => 
        setProductos(
          res.docs.map((doc)=>
            {
              return {...doc.data(), id: doc.id}
            }
          )
        )
    )
}, [categoryId]);

  return (
    <div className='productos-contenedor'>
      <div className='productos-contenedor-titulo' >
        <h3>{titulo}</h3>
      </div>
      <ItemList producto={producto} />      
    </div>
  )
}