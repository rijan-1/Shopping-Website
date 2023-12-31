import { myContext } from "../../Context";
import { useContext } from "react";

import "./Cart.css";
export const CartProducts = (props) => {
  const { AddToCart, RemoveFromCart, currentCart,updateCartInput } = useContext(myContext);
  const { id, productName, price, productImage,description } = props.data;

  return <div>
    <div className="productCart">
      <img src={productImage} alt="idk" />
      <div style={{display:"inline"}} >
        <h3>{productName}</h3>
        <h4 className='descriptionStyle'>{description}</h4>
        <h3>£{price}</h3>
        <div style={{display:'flex', justifyContent:'center',marginLeft:'-550px'}}>
        <button onClick={()=>{AddToCart(id)}}>+</button>
        <input style={{width:'30px'}}value ={currentCart[id]} onChange={(e)=>{updateCartInput(Number(e.target.value),id)}}/>
        <button onClick={()=>{RemoveFromCart(id)}}>-</button>
</div>
        
      </div>
     
    </div>
    <div>
   
   
    
    </div>
    </div>
    
  ;
};
