import React from 'react'
import ItemCount from './ItemCount';
import { useState, useEffect } from 'react';
const productos = [
    {
        id : 1 , 
        name : 'Producto 1 ', 
        description : 'Test 1 '
    }
]

const getFetch = new  Promise(function(resolve, reject) {

    setTimeout(function() {
        resolve(productos)
    }, 2000)

})

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const onAdd = (cant) => console.log(cant);

    useEffect(() => {
        getFetch.then(res => setProducts(res))
        .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <ItemCount stock={5} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer
