import React from 'react';
import { createSlice } from "@reduxjs/toolkit";

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []
const totalQuantity = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('totalQuantity')) : 0
const totalAmount = localStorage.getItem('totalAmount') !== null ? JSON.parse(localStorage.getItem('totalAmount')) : 0

const initialState = {
    cartItems: items,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount
}

const CartSlice = createSlice({
    name: 'cart',
    initialState: initialState,

    reducers: {

        // add items

        addItem(state, action){
            const newItem = action.payload
            const existingItem = state.cartItems.find(item =>item.id === newItem.id)
            state.totalQuantity++

            if(!existingItem){
                state.cartItems.push({
                    id: newItem.id,
                    name: newItem.name,
                    image: newItem.image,
                    quantity: 1,
                    totalPrice: newItem.price,
                    price: newItem.price
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price);
            };

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            )

            localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item => item)))

            localStorage.setItem('totalAmount', JSON.stringify(state.totalAmount))

            localStorage.setItem('totalQuantity', JSON.stringify(state.totalQuantity))



        },

        // remove items
        
        removeItem(state, action) {
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id);
            state.totalQuantity--
      
            if (existingItem.quantity === 1) {
              state.cartItems = state.cartItems.filter(item => item.id !== id);
            } else {
              existingItem.quantity--
              existingItem.totalPrice =
                Number(existingItem.totalPrice) - Number(existingItem.price);
            }
      
            state.totalAmount = state.cartItems.reduce(
              (total, item) => total + Number(item.price) * Number(item.quantity),
              0
            )
        },

        // delete the items

        deleteItem(state, action){
            const id = action.payload
            const existingItem = state.cartItems.find(item => item.id === id);

            if(existingItem){
                state.cartItems = state.cartItems.filter(item => item.id !== id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity
            }

            state.totalAmount = state.cartItems.reduce(
                (total, item) => total + Number(item.price) * Number(item.quantity),
                0
            )
        }
    
        
    }
})

export const cartActions = CartSlice.actions;
export default CartSlice;