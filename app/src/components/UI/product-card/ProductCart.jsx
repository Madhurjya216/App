import React from 'react'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shpping-cart/CartSlice';


const ProductCart = (props) => {

    const {id, name, price, image, rating} = props.item;
    
    const dispatch = useDispatch()

    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            name,
            image,
            price
        }))
    }

    return(
    <>
        <div className='product_item  align-items-center gap-3'>
            <div className='product_img'>
                <img src={image} alt={name} className='w-100' /> 
            </div>
            <div className='product_content'>
                <h5 className='text-center'>
                    <Link className='product-link' to={`/ProductDetails/${id}`}><span>{name}</span></Link>
                </h5>
                <div className='d-flex justify-content-around align-items-center'>
                    <span><i className="ri-star-fill"></i>{rating}</span>
                    <span className='price'><i className="fa-solid fa-indian-rupee-sign"></i>{price}/-</span>
                    <button className='addtocart_btn' onClick={addToCart}><i className="ri-shopping-cart-2-line"></i></button>
                </div>
            </div>
        </div>
    </>
    )
}

export default ProductCart;