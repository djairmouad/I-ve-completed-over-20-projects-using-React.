import {  createContext, useReducer, useState } from "react";
import { DUMMY_PRODUCTS } from '../dummy-products.js';
export const CartContex=createContext({
    items:[],
    addItemToCart:()=>{},
    onUpdateItemQuantity:()=>{}
});

function shoppingCartReducer(state,action){
if(action.type==="ADD_ITEM"){
  const updatedItems = [...state.items];
    
  const existingCartItemIndex = updatedItems.findIndex(
    (cartItem) => cartItem.id === action.payLoad
  );
  const existingCartItem = updatedItems[existingCartItemIndex];

  if (existingCartItem) {
    const updatedItem = {
      ...existingCartItem,
      quantity: existingCartItem.quantity + 1,
    };
    updatedItems[existingCartItemIndex] = updatedItem;
  } else {
    const product = DUMMY_PRODUCTS.find((product) => product.id === action.payLoad);
    updatedItems.push({
      id: action.payLoad,
      name: product.title,
      price: product.price,
      quantity: 1,
    });
  }
  return {
    ...state,//not needed here because have only one value
    items: updatedItems,
  };
}else if(action.type==="UPDATE_ITEM"){
  const updatedItems = [...state.items];
  const updatedItemIndex = updatedItems.findIndex(
    (item) => item.id === action.payLoad.productId
  );

  const updatedItem = {
    ...updatedItems[updatedItemIndex],
  };

  updatedItem.quantity += action.payLoad.amount;

  if (updatedItem.quantity <= 0) {
    updatedItems.splice(updatedItemIndex, 1);
  } else {
    updatedItems[updatedItemIndex] = updatedItem;
  }

  return {
    items: updatedItems,
  };
}

return state;
}
export default function CartContexProvider({children}){

          const [shoppingCartState,shoppingCartDispatch]=useReducer(
      shoppingCartReducer,
      {
        items: [],
      })

    const [shoppingCart, setShoppingCart] = useState({
        items: [],
      });

      function handleAddItemToCart(id) {
        shoppingCartDispatch({
          type:"ADD_ITEM",
          payLoad:id,
        })
      }
    
      function handleUpdateCartItemQuantity(productId, amount) {
        shoppingCartDispatch({
          type:"UPDATE_ITEM",
          payLoad:{
            productId:productId,
            amount:amount 
          }
        })
      }
     
      const cartCtx={
        items:shoppingCartState.items,
        addItemToCart:handleAddItemToCart,
        onUpdateItemQuantity:handleUpdateCartItemQuantity
      }
      return (
      <CartContex.Provider value={cartCtx}>
        {children}
      </CartContex.Provider>
      )
}