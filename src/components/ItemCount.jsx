import React,{ useState } from 'react'

const ItemCount = ({item, stock, initial}) => {

    const [contador, setContador] = useState(parseInt(initial))

    const restarUno = () => {setContador (contador - 1) };
    const sumarUno = () => {setContador (contador + 1) };

    return (
        <div>
            <p>{contador}</p>
            <br/>
            <button
            disabled= {contador <= 0}
            onClick={restarUno}
            >-</button>

            <button>Agregar al carro</button>

            <button
            disabled= {contador >= stock}
            onClick={sumarUno}
            >+</button>

        </div>
    )
}

export default ItemCount
