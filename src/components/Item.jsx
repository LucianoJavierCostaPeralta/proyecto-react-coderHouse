import React from 'react'

const Item = ({product}) => {
    return (
        <>
            <div key={product.id} className="card  mt-3 mb-3 m-auto w-50 ">
                        <div className="card-header">
                            <h5 className="card-title text-center">{product.description}</h5>
                        </div>
                        <div className="card-body">
                            <img src={product.foto} className="card-img-top w-50" alt="imagen del producto" />
                            <p className="card-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Placeat excepturi illo harum esse quasi laborum expedita,
                                dolorem nemo quo veniam consequuntur provident minima deleniti
                                quibusdam labore possimus aut quia molestias!
                            </p>
                        </div>
                        <div className="card-footer">
                            <button
                                className="btn btn-outline-primary btn-block "
                            >
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
        </>
    )
}

export default Item
