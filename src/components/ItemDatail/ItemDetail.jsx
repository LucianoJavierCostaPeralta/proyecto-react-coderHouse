import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import {useCartContext} from'../../Context/CartContext'


const ItemDetail = ({ item }) => {
    const { addToCart, formatoMoneda,  } = useCartContext();

    
    
    
    const onAdd = (contador) =>{
    

      
            addToCart({
                cantidad : contador,
                item : item
            })
        

    }

    return (
        <div className="col-12 col-sm-10 col-lg-6 m-auto">

            <div key={item.id} className="card  mt-3 mb-3 m-auto  ">
                <div className="card-header">
                    <h5 className="card-title text-center">{item.title}</h5>
                </div>
                <div className="card-body">
                    <img src={item.photoUrl} className="card-img-top w-50" alt="imagen del itemo" />
                </div>
                <div className="card-footer">
                    
                    <p className="card-text-p mt-1">
                        { `${formatoMoneda(item.precio)}`}
                    </p>

                    <ItemCount
                    stock={5}
                    initial={1}  
                    onAdd={onAdd}
                    />
                </div>
            </div>

        </div>
    )
}

export default ItemDetail
