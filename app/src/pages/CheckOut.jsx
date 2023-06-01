import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from '../components/UI/common-section/CommonSection';
import Helmet from '../components/Helmet/Helmet';
import "../style/Checkout.css";
import StripeCheckout from 'react-stripe-checkout';
import { cartActions } from "../store/shpping-cart/CartSlice";



function CheckOut(){

    const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
    const shippingCost = 50;

    const totalAmount = cartTotalAmount + Number(shippingCost);
    const cartItems = useSelector(state => state.cart.cartItems);

    const onToken = (token) => {
        console.log(token);
    }

        return(
        <>
            <Helmet title='Checkout'>
                <CommonSection title='Checkout' />
                <section>
                    <Container>
                        <Row className='d-flex'>
                            <Col lg='6' md='6' className='mt-5 align-items-center'>
                                <h4 className='mb-4 checkout_hd'>Checkout details</h4>
                                <div className="checkout_bill">
                                    <div>
                                    {
                                    cartItems.length === 0 ? <h3 className="text-center bold-text mt-5 mb-5">Your Cart is Empty</h3> : <table className='table table-bordered'>
                                    <tbody>
                                        {cartItems.map((item) => (
                                        <Td item={item} key={item.id} />
                                        ))}
                                    </tbody>                             
                                    </table>
                                }

                                    </div>
                                    <h6 className="d-flex align-items-center justify-content-between mb-3">
                                    Subtotal: <span>${cartTotalAmount}</span>
                                    </h6>
                                    <h6 className="d-flex align-items-center justify-content-between mb-3">
                                    Shipping: <span>${shippingCost}</span>
                                    </h6>
                                    <div className="checkout_total">
                                    <h5 className="d-flex align-items-center justify-content-between">
                                        Total Amount: <span>${totalAmount}</span>
                                    </h5>
                                    </div>
                                    <div>
                                    <StripeCheckout
                                    token={onToken}
                                    stripeKey="pk_test_51MgqU8SA64Ml5077Glry3ZP2jq1VaGXdDpn8GvMeNK1YVGGIvmMGemQFCpTfdWU0C8yMkxMKXCoINp46p9P2hsvv0082HJvJVs"
                                    name='GROMO payment'
                                    shippingAddress
                                    billingAddress
                                    className='checkout_btn'
                                />
                                </div>
                                </div>
                            </Col>

                            <Col lg='6'md='6'>
                                <div className='align_img'>
                                    <img className='w-100' src="https://i.ibb.co/gt59TgL/Online-Groceries-pana.png" alt="image" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}

const Td = (props) => {

    const {id, image, name, price, quantity} = props.item;
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }
    return( 
    <div className='checkout-table d-flex align-items-center justify-content-between'>
        <span className='text-center cart_img-box'>
            <img src={image} alt={name}  />
        </span>
        <span className='text-center'>{name}</span>
        <span className='text-center price-color'><i className="fa-solid fa-indian-rupee-sign"></i>{price}/-</span>
        <span className='text-center'>{quantity}</span>
        <span className='text-center cart_item-del'><i className="ri-delete-bin-line" onClick={deleteItem}></i></span>
    </div>
    )
}

export default CheckOut;