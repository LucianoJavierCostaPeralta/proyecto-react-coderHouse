import { useState } from "react";
import firebase from "firebase";
import "firebase/firestore";
import { getFirestore } from "../../services/getFirebase";
import { useCartContext } from "../../Context/CartContext";

const FormCount = () => {
    const { cartList, precioTotal } =
        useCartContext();
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleOnChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let orden = {};

        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = formData;

        orden.total = precioTotal();

        orden.items = cartList.map((cartItem) => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.precio * cartItem.cantidad;

            return {
                id,
                title,
                price,
            };
        });

        const db = getFirestore();
        db.collection("orders")
            .add(orden)
            .then((resp) => alert(`Orden de compra ${resp.id}`))
            .catch((err) => console.log(err))
            .finally(
                () =>
                    setFormData({
                        name: "",
                        phone: "",
                        email: "",
                    })
                //borrarLista()
            );

        const itemsToUpdate = db.collection("items").where(
            firebase.firestore.FieldPath.documentId(),
            "in",
            cartList.map((i) => i.item.id)
        );

        const batch = db.batch();

        // por cada item restar del stock la cantidad de el carrito

        itemsToUpdate.get().then((collection) => {
            collection.docs.forEach((docSnapshot) => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock -
                        cartList.find((item) => item.item.id === docSnapshot.id).cantidad,
                });
            });

            batch.commit().then((res) => {
                console.log("resultado batch:", res);
            });
        });
    };
    return <div className="col-8 mt-4 m-auto bg-dark p-2 mb-4" >
        <form onChange={handleOnChange} onSubmit={handleOnSubmit}>
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
};
export default FormCount;