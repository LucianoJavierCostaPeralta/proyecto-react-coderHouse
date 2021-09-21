import React, { useState } from "react";

const ItemCount = ({ item, stock, initial}) => {
const [contador, setContador] = useState(parseInt(initial));

const sumarUno = () => setContador(contador + 1);

const agregarCarrito = () => console.log(contador);

const restarUno = () => setContador(contador - 1);

return (

    <div className="  text-center ">

        

        <button className="btn btn-outline-primary btn-block"disabled={contador <= 0} onClick={restarUno}>
        -
        </button>
        <button className="btn btn-outline-primary btn-block" onClick={agregarCarrito}>Agregar al carro</button>
        <button className="btn btn-outline-primary btn-block" disabled={contador >= stock} onClick={sumarUno}>
        +
        </button>

        <p className="contador mt-2">{contador}</p>
        


    </div>


);
};

export default ItemCount;
