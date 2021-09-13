import React, { useState } from "react";

const ItemCount = ({ item, stock, initial}) => {
const [contador, setContador] = useState(parseInt(initial));

const sumarUno = () => setContador(contador + 1);

const agregarCarrito = () => console.log(contador);

const restarUno = () => setContador(contador - 1);

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
