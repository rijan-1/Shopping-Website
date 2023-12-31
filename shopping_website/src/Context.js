import { createContext, useState } from "react";
import { PRODUCTS } from "./Products";

export const myContext = createContext();

export const HandleContextProvider = (props) => {
  const DefaultCartValue = () => {
    let cart = {};

    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [currentCart, setCurrentCart] = useState(DefaultCartValue);

  const AddToCart = (itemId) => {
    setCurrentCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const RemoveFromCart = (itemId) => {
    {currentCart[itemId] > 0 && setCurrentCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 })) }};

 const updateCartInput =(newValue, itemId)=>{

  setCurrentCart((prev)=>({...prev, [itemId]: newValue}))

 }

    
  return (
    <div>
      <myContext.Provider value={{ AddToCart, RemoveFromCart, currentCart,updateCartInput }}>
        {props.children}
      </myContext.Provider>
    </div>
  );
};
