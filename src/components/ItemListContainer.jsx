import React from "react";
import ItemList from './ItemList';
import { useState, useEffect } from "react";
import { getFetch } from "../util/mock";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    useEffect(() => {
        getFetch
            .then((res) => {
                if (idCategory) {
                    const categoryFilter = res.filter(
                        (item) => item.description.toLowerCase() === idCategory
                    )
                    setProducts(categoryFilter)
                } else {
                    
                    setProducts(res)
                }
            })

            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [idCategory]);



    return (
        <div className="container">
            {loading ? <h2 >Cargando...</h2> : <ItemList products={products} />}
            
        </div>
    );
};

export default ItemListContainer;
