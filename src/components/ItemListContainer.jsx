import React from "react";
import ItemCount from "./ItemCount";
import { useState, useEffect } from "react";
const productos = [
    {
        id: 1,
        foto: "https://http2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        description:"Gabinete",
    },
    {
        id: 2,
        foto: "https://http2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        description:"Gabinete",
    },
    {
        id: 3,
        foto: "https://http2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        description:"Gabinete",
    },
    {
        id: 4,
        foto: "https://http2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        description:"Gabinete",
    },
    {
        id: 5,
        foto: "https://http2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        description:"Gabinete",
    },
    {
        id: 6,
        foto: "https://http2.mlstatic.com/D_NQ_NP_705847-MLA47167166169_082021-O.webp",
        description:"Gabinete",
    }
];

const getFetch = new Promise((resolve, reject) => {
setTimeout(() => resolve(productos), 2000);
});

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
    getFetch.then((res) => setProducts(res)).catch((err) => console.error(err));
    }, []);

    return (
        <div>
            {products.map((product) =>(

                <div key={product.id} className="card  mt-3 mb-3 m-auto w-50 ">
                    <div className="card-header">

                    <h5 className="card-title text-center">{product.description}</h5>
                    </div>
                    <div className="card-body">
                    <img src={product.foto} className="card-img-top w-50" alt="..."/>
                    <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat excepturi illo harum esse quasi laborum expedita, dolorem nemo quo veniam consequuntur provident minima deleniti quibusdam labore possimus aut quia molestias!</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-primary btn-block ">Agregar al carrito</button>
                    </div>
                </div>
            ))}
            <ItemCount stock={5} initial={1}  />
        </div>
    );
};

export default ItemListContainer;
