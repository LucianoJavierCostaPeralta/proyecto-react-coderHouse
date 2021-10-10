import React, { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ item, stock, initial, onAdd  }) => {
    const [contador, setContador] = useState(parseInt(initial));
    const [cambiarBoton, setCambiarBoton] = useState(true)
    const sumarUno = () => setContador(contador + 1);

    const agregarCarrito = () => {

        onAdd(contador);
        setCambiarBoton(false)
    }

    const restarUno = () => setContador(contador - 1);

    return (

        <div className="  text-center ">
            {cambiarBoton ?
                <div>

                    <button className="btn btn-outline-primary btn-block" disabled={contador <= 0} onClick={restarUno}>
                        -
                    </button>
                    <label className="contador mt-2">{contador}</label>

                    <button className="btn btn-outline-primary btn-block" disabled={contador >= stock} onClick={sumarUno}>
                        +
                    </button>
                    <br />
                    

                    <button className="btn btn-outline-primary btn-block" onClick={agregarCarrito}>Agregar al carro</button>
                </div>
                :
                <div>
                    <Link to={'/cart'}>
                    <button className="btn btn-outline-primary btn-block">Terminar Compra</button>
                    </Link>
                    <Link to={'/'}>
                    <button className="btn btn-outline-primary btn-block">Seguir Comprando</button>
                    </Link>
                </div>
            }
        </div>
    );
};

export default ItemCount;
