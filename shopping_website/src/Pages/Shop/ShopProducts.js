import './Shop.css'
import { useContext } from 'react'
import { myContext } from '../../Context'

export const ShopProducts = (props) => {
  const {AddToCart, RemoveFromCart, currentCart} = useContext(myContext)

    const { id,productName, price, productImage} = props.data
  


    return (
      <div className="product">
        <img src={productImage} alt='image' />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p> ${price}</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <button onClick={() => AddToCart(id)} className="addToCartBttn">Add To Cart</button>
          <button onClick={() => RemoveFromCart(id)} className="addToCartBttn">Remove Item</button><h4>({currentCart[id]})</h4>

          

</div>
          
       
        </div>
       
     
      </div>
  )
}


