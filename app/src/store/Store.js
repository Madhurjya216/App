import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./shpping-cart/CartSlice";
import CartUiSlice from "./shpping-cart/CartUiSlice"

const Store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
        cartUi: CartUiSlice.reducer,

    }
})

export default Store;