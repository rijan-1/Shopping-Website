import { PRODUCTS } from "../../Products";
import { useContext } from "react";
import { myContext } from "../../Context";
import { CartProducts } from "./CartProducts";
import "./Cart.css";
import {Link} from 'react-router-dom'

export const Cart = () => {
  const { currentCart } = useContext(myContext);

  // Calculate the total amount
  let totalAmount = 0;
  for (const productId in currentCart) {
    const quantity = currentCart[productId];
    const product = PRODUCTS.find((p) => p.id === Number(productId));
    if (quantity > 0 && product) {
      totalAmount += quantity * product.price;
    }
  }

  return (
    <div>
      <div className="productsCart">
        {PRODUCTS.map((product) => {
          const { id } = product;
          const quantity = currentCart[id];

          if (quantity > 0) {
            return (
              <div key={id}>
                <CartProducts data={product} />
              </div>
            );
          }
        })}
      </div>

      {/* Display the total amount */}
      <div  className="totalAmount">
        <h2>Total Amount: £{totalAmount}</h2>
        <Link to='/'><button className='addToCartBttn'>Continue Shopping</button></Link>
      </div>
    </div>
  );
};
