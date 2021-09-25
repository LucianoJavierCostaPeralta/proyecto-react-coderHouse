import { useCartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cartList } = useCartContext();

  console.log(`cart ${cartList}`);

  return (
    <div className="  col-6 col-sm-6 col-md-6 col-lg-4 m-auto ">
      {cartList.map((item) => (
        <div className="card mt-3 mb-3 m-auto ">
          <div className="card-header">
            <h5>{item.product.title}</h5>
          </div>
          <div className="card-body">
            <img
              src={item.product.photoUrl}
              className="card-img-top w-25"
              alt=""
            />
          </div>
          <div className="card-footer ">
            <p className="card-text-p">{`$ ${item.product.precio}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
