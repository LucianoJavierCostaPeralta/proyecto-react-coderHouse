import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";

const Cart = () => {
  const { cartList, formatoMoneda } = useCartContext();


  return (

    <div className="container-fluid ">

      <div className="row">
        <div className="col-10 col-sm-10 col-md-8 col-lg-6">

          {cartList.map((item) => (
            <div className="card mt-3 mb-3 m-auto ">
              <div className="card-header">
                <h5>{item.title}</h5>
              </div>
              <div className="card-body">
                <img
                  src={item.photo}
                  className="card-img-top w-25"
                  alt=""
                />
              </div>
              <div className="card-footer row text-center">
                <p className="card-text-p col-12 col-sm-10 col-md-8 col-lg-6">{`${formatoMoneda(item.precio)}`}</p>

                <p className=" card-text-p col-12 col-sm-10 col-md-8 col-lg-6">{`Cantidad :  ${item.cantidad} `}</p>
              </div>
            </div>
          ))}
        </div>
          
      </div>
      <div className="d-flex justify-content-center">
        <Link to={'/'}>
            <button type="button" class="btn btn-warning">SEGUIR COMPRANDO</button>
        </Link>
      </div>
    </div>




  );
};

export default Cart;
