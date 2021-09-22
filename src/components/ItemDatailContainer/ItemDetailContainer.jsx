import React, {useEffect, useState} from 'react'
import { getFetch } from '../../util/mock'
import ItemDetail from '../ItemDatail/ItemDetail'
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})
    const [loading, setLoading] = useState(true);

   const { idF } = useParams()

    useEffect(() => {

        getFetch
        .then((res) => {
            if (idF) {
                
                const idFilter = res.filter(
                    (item) => item.id === parseInt(idF)
                )
                setItem(idFilter)
            } else {
                
                setItem(res)
            }
        })

        .catch((err) => console.error(err))
        .finally(() => setLoading(false));

    }, [idF])

    return (
        <div className=" container row text-center">

    { loading ? <h4>Cargando</h4> :
    item && <ItemDetail key={item[0].id} item={item[0]}/>}
    
        </div>
    )
}

export default ItemDetailContainer
