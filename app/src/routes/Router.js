import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import CheckOut from "../pages/CheckOut";
import ProductDetails from "../pages/ProductDetails";
import AllProducts from "../pages/AllProducts";
import PageNotFound from '../pages/404';
import Main from '../pages/Logout';

const Router = () => {

    const user = localStorage.getItem("token");

    return(
         <>
            <Routes>
                <Route path="/" element={< Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                {user && <Route path="/" exact element={<Main />} />}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/ProductDetails/:id" element={<ProductDetails />} />
                <Route path="/allproduct" element={<AllProducts />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Router;