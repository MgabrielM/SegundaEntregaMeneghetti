import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemList } from './ItemList';
import { db } from '../firebase/config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { get } from 'firebase/database';

export const ItemListContainer = () => {

  let {categoryId} = useParams();
  let [producto, setProductos] = useState([]);
  let [titulo, setTitulo] = useState("Productos");


useEffect(() => {    

  const productosRef = collection(db, "Productos");
  const q = categoryId ? query(productosRef, where("categoria.id", "==", categoryId)) : productosRef;

  const categoriaRef = collection(db, "categorias")
  let queryCategoria = categoryId && query(categoriaRef, where("id", "==", categoryId)); 

  getDocs(q)
    .then((res) => 
      setProductos(
        res.docs.map((doc)=>
          {
            return {...doc.data(), id: doc.id}
          }
        )
      )
  )

  if (queryCategoria) {
      getDocs(queryCategoria)
      .then((res) =>{
        setTitulo(res.docs.map((doc) => doc.data().nombre
      ))
    })
  } 

  


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