import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { getFirestore } from "../../services/getFirebase";

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idCategory } = useParams();

    useEffect(() => {
        const dbQuery = getFirestore();

        const filterQuery = idCategory
            ? dbQuery.collection("items").where("categoryId", "==", idCategory)
            : dbQuery.collection("items");

        filterQuery
            .get()
            .then((res) => {
                setProducts(
                    res.docs.map((product) => ({
                        id: product.id,
                        ...product.data(),
                    }))
                );
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [idCategory]);

    return (
        <div className="container">
            {loading ? <h2> Cargando... </h2> : <ItemList products={products} />}
        </div>
    );
};

export default ItemListContainer;
