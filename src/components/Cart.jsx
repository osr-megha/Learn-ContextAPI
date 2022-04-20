import { useEffect, useState, useContext } from "react";
import { CartContent } from "../Context";
import SingleProduct from "./SingleProduct";

const Cart = () => {
  // const { cart } = CartState();
  const [total, setTotal] = useState();

  const {cart} = useContext(CartContent);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total:₹ {total}</span>
      <div className="productContainer">
        {cart.map((prod) => (
          <SingleProduct
            prod={prod}
            key={prod.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;
