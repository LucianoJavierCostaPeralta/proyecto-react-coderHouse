import React from 'react'
import Item from './Item';
const ItemList = ({items, stock, initial}) => {
    return (
        <div className="text-center df justyfy-content-center">

            {items.map((item) =>(
                <Item key={item.id} item={item} stock={stock} initial={initial}/>
            ))}

        </div>
    )
}

export default ItemList
