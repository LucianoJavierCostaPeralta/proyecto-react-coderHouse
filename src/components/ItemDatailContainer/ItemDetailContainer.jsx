import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDatail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";

const getItems = (id) => {
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const oneItem = itemCollection.doc(id);
    return oneItem.get();
};

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const { idF } = useParams();

    useEffect(() => {
        getItems(idF)
            .then((doc) => {
                if (doc.exists) {
                    setItem({ id: doc.id, ...doc.data() });
                }
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, [idF]);

    return (
        <div className=" container row text-center">
            {loading ? <h4>Cargando</h4> : <ItemDetail item={item} />}
        </div>
    );
};

export default ItemDetailContainer;
