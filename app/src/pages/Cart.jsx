import React from 'react';
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col} from "reactstrap";
import "../style/Cart-Page.css";
import { cartActions } from "../store/shpping-cart/CartSlice";
import { Link } from "react-router-dom";
const Cart = () => {

    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    return(
        <>
            <Helmet title='Cart'>
                <CommonSection title='My Cart' />

                <section>
                    <Container>
                        <Row>
                            <Col lg='12' className='mt-5'>
                                {
                                    cartItems.length === 0 ? <h3 className="text-center bold-text mt-5 mb-5">Your Cart is Empty</h3> : <table className='table table-bordered'>
                                    <thead>
                                        <tr className='text-center cart-table'>
                                            <th>Image</th>
                                            <th>Product name</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead> 
                                    <tbody>
                                        {cartItems.map((item) => (
                                        <Tr item={item} key={item.id} />
                                        ))}
                                    </tbody>                             
                                    </table>
                                }

                                <div className='cart_totalamount mt-5'>
                                    <h6>Subtotal: <span><i className="fa-solid fa-indian-rupee-sign"></i>{totalAmount}/-</span></h6>
                                    <p>Taxes and shipping charge will calculate at checkout</p>
                                    <div className='cart_page-btn'>
                                        <button className="cart_btn mb-3"><Link className='cart_link-btn' to='/allproduct'>Continue Shopping</Link></button>
                                        <button className="cart_btn"><Link className='cart_link-btn' to='/checkout'>Proceed to Check Out</Link></button>
                                    </div>
                                </div>
                                
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}

const Tr = (props) => {

    const {id, image, name, price, quantity} = props.item;
    const dispatch = useDispatch();

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }
    return( 
    <tr className='cart-table'>
        <td className='text-center cart_img-box'>
            <img src={image} alt-={name}  />
        </td>
        <td className='text-center'>{name}</td>
        <td className='text-center price-color'><i className="fa-solid fa-indian-rupee-sign"></i>{price}/-</td>
        <td className='text-center'>{quantity}</td>
        <td className='text-center cart_item-del'><i className="ri-delete-bin-line" onClick={deleteItem}></i></td>
    </tr>
    )
}

export default Cart