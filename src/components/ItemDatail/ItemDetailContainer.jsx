import React, {useEffect, useState} from 'react'
import { getFetchUno } from '../../util/mock'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [item, setItem] = useState({})

    useEffect(() => {

        getFetchUno
        .then(res => setItem(res))

    }, [])

    return (
        <>
            <ItemDetail key={item} item={item}/>
        </>
    )
}

export default ItemDetailContainer
