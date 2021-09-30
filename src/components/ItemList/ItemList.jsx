import React, { memo } from 'react'
import Item from '../Item/Item';

const ItemList =  memo(

    ({ products}) => {
        return (
            <div className="row ">
                {
                    products.map((product) => <Item key={product.id} product={product}/>)
                }
            </div>
        )
    }
)


export default ItemList
