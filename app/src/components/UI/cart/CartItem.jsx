import React from 'react';
import { ListGroupItem } from "reactstrap";
import "../../../style/cart-item.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shpping-cart/CartSlice"

const CartItem = ({item}) => {

    const {id, name, image, price, quantity, totalPrice} = item;

    const dispatch = useDispatch();

    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id,
            name,
            price,
            image
        }))
    }

    const decreaseItem = () => {
        dispatch(cartActions.removeItem(id))
    }

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }

    return(
        <>
            <ListGroupItem className='border-0 ps-0 cart_item'>
                <div className="cart_item-info d-flex gap-3">
                    <img src={image} alt={name} />

                    <div className="cart_product-info d-flex align-items-center justify-content-between gap-4 w-100">
                        <div>
                            <h6 className='cart_product-title'>{name}</h6>
                            <p className='d-flex align-items-center gap-5 cart_product-price'>{quantity}x <span><i className="fa-solid fa-indian-rupee-sign"></i>{totalPrice}/-</span></p>
                            <div className='d-flex align-items-center gap-4 increase_decrease-btn'>
                                <span className='increase_btn' onClick={incrementItem}><i className="ri-add-line"></i></span>
                                <span className='quantity'>{quantity}</span>
                                <span className='decrease_btn' onClick={decreaseItem}><i className="ri-subtract-line"></i></span>
                            </div>
                        </div>

                        <span className='delete_btn' onClick={deleteItem}><i className="ri-delete-bin-line"></i></span>
                    </div>
                </div>
            </ListGroupItem>
        </>
    )
}

export default CartItem;