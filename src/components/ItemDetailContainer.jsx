import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import { db } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';

export const ItemDetailContainer = () => {

    let {itemId} = useParams();
    let [producto, setProducto] = useState(undefined);
  
    useEffect(() =>{
        const docRef = doc(db, "Productos", itemId)

        getDoc(docRef)
          .then((res) => 
          setProducto(( { ...res.data() , idf: res.id } ))
        )
        }  
      ), [itemId]


  return (
    <div> {producto ? <ItemDetail producto={producto} />: "Cargando..."}</div>
  )
    
}
