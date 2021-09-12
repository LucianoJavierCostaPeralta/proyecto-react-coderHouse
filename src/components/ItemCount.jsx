import React, { useState } from "react";

const ItemCount = ({ item, stock, initial, onAdd }) => {
const [contador, setContador] = useState(parseInt(initial));

const restarUno = () => setContador(contador - 1);

const sumarUno = () => setContador(contador + 1);

const agregarCarrito = () => onAdd(contador);

return (

    <div className="text-center">
        <p>{contador}</p>
        <br />
        <button disabled={contador <= 0} onClick={restarUno}>
        -
        </button>

        <button onClick={agregarCarrito}>Agregar al carro</button>

        <button disabled={contador >= stock} onClick={sumarUno}>
        +
        </button>
    </div>


);
};

export default ItemCount;
