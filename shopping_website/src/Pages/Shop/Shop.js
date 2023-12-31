import { PRODUCTS } from "../../Products"
import { ShopProducts } from "./ShopProducts"
export const Shop = () => {
  return (
    <div className="shop">
    <div className="shopTitle">
      <h1>Shopping Page</h1>
    </div>

    <div className="products">
      {PRODUCTS.map((product) => (
        <ShopProducts data={product} />
      ))}
    </div>
  </div>
  )
}


