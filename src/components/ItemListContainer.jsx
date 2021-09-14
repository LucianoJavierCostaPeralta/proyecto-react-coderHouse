import React from "react";
import ItemCount from "./ItemCount";
import ItemList from './ItemList';
import { useState, useEffect } from "react";
import {getFetch}  from "../util/mock";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getFetch
            .then((res) => setProducts(res))
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);



    return (
        <div>
            {loading ? <h2 >Cargando...</h2> : <ItemList products={products} />}
            <ItemCount stock={5} initial={1} />
        </div>
    );
};

export default ItemListContainer;
