import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalQuantity:0,
        totalAmount:0
    },
    reducers:{
        addItemToCart(state,action){
            const item=action.payload;
            const existingItems=state.items.find((event)=>event.id===item.id);
            if(!existingItems){
                state.items.push({id:item.id,price:item.price,quantity:1,totalPrice:item.price,name:item.title});
            }else{
                existingItems.quantity++;
                existingItems.totalPrice=existingItems.totalPrice+item.price;
            }
             state.totalQuantity++
        },
        removeItemToCart(state,action){
            const item=action.payload;
            const existingItems=state.items.find((event)=>event.id===item.id);
            
            if(existingItems.quantity===1){
                state.items.filter((event)=>event.id!==item.id);
                state.totalQuantity--
            }else{
                existingItems.quantity--;
                existingItems.totalPrice=existingItems.totalPrice-item.price;
                state.totalQuantity--
            }
            
        },

    }
})
export const dispatchCartSlice=cartSlice.actions;

export default cartSlice.reducer;