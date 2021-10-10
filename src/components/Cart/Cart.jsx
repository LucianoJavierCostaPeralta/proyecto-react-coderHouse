import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";
import  firebase  from 'firebase'
import 'firebase/firestore'
import { getFirestore } from '../../services/getFirebase';
const Cart = () => {

  const { cartList, formatoMoneda, precioTotal, clearList, removeItem } =
    useCartContext();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })

  const handleOnChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })


  const handleOnSubmit = (e) =>{        
    e.preventDefault()        
    let orden = {}

    orden.date = firebase.firestore.Timestamp.fromDate( new Date() );
   
    orden.buyer = formData
    
    orden.total = precioTotal();
    
    orden.items = cartList.map(cartItem => {
        const id = cartItem.item.id;
        const title = cartItem.item.title;
        const price = cartItem.item.precio * cartItem.cantidad;

        return {id, title, price}   
    })


    const db = getFirestore()
    db.collection('orders').add(orden)
    .then(resp => alert(`Orden de compra ${resp.id}`))
    .catch(err=> console.log(err))
    .finally(()=>
        setFormData({
            name: '',
            phone: '',
            email: ''
        }) 
        //borrarLista()
    )

    const itemsToUpdate = db.collection('items').where(
      firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.item.id)
  )
      
  const batch = db.batch();
      
  // por cada item restar del stock la cantidad de el carrito
  
  itemsToUpdate.get()
  .then( collection=>{
      collection.docs.forEach(docSnapshot => {
          batch.update(docSnapshot.ref, {
              stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).cantidad
          })
      })

      batch.commit().then(res =>{
          console.log('resultado batch:', res)
      })
  })

}


  return (
    <div className="container ">
      {cartList.length === 0 ? (
        <div className="row text-center">
          <div className="col-12">
            <h2>Carrito vacio</h2>
            <Link to={"/"}>
              <button type="button" className="btn btn-warning  ">
                ir a la tienda
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="row text-center">

          {cartList.map((item, index) => (

            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
              <div
                key={index.id}
                className="card mt-2 mb-2 m-auto  "
              >
                <div className="card-header">
                  <h5>{item.item.title}</h5>
                </div>
                <div className="card-body">
                  <img
                    src={item.item.photoUrl}
                    className="card-img-top w-25"
                    alt=""
                  />
                </div>
                <div className="card-footer row text-center">
                  <p className="card-text-p col-12 col-sm-7 col-md-7 col-lg-7">{`Precio : ${formatoMoneda(
                    item.item.precio
                  )}`}</p>

                  <p className=" card-text-p col-12 col-sm-4 col-md-4 col-lg-4">{`Unds :  ${item.cantidad} `}</p>
                  <p className=" card-text-p col-12 col-sm-8 col-md-8 col-lg-8">{`Sub total :  ${formatoMoneda(
                    parseInt(item.cantidad) * parseInt(item.item.precio)
                  )} `}</p>

                  <button
                    type="button"
                    className="btn btn-danger col-12 col-sm-4 col-md-4 col-lg-4"
                    onClick={() => removeItem(item.item.id)}
                  >
                    ELIMINAR PRODUCTO{" "}
                  </button>
                </div>
              </div>
            </div>

          ))}


          <div className="col-12 text-center  bg-success text-dark mt-2 mb-2 ">
            <h3 calssName="">{`Total a pagar :  ${formatoMoneda(
              precioTotal()
            )}`}</h3>
          </div>

          <div className="col-6 col-sm-6 col-md-6 col-lg-6  mt-2 mb-2">
            <button
              type="button"
              className="btn btn-danger "
              onClick={() => clearList()}
            >
              Borrar carrito
            </button>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6  mt-2 mb-2">
            <Link to={"/"}>
              <button type="button" className="btn btn-warning  ">
                Seguir comprando
              </button>
            </Link>
          </div>

          <div className="col-8 mt-4 m-auto bg-dark p-2 mb-4" >
            <form onChange={handleOnChange}  onSubmit={handleOnSubmit}>
              <input class="form-control mb-1" type='text'
                placeholder='ingrese el nombre'
                name='name'
                value={formData.name}
              />

              <input class="form-control mb-1" type='number'
                placeholder='ingrese el nro de tel'
                name='phone'
                value={formData.phone}
              />
              <input class="form-control mb-1" type='text'
                placeholder='ingrese el email'
                name='email'
                value={formData.email}
              />
              <input class="form-control mb-1" type='text'
                placeholder='Confirme el mail '
                name='email2'
              />
            <button class="btn btn-info mt-1"

            >Terminar Compra</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
