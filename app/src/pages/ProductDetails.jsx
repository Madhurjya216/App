import React, { useState, useEffect } from 'react';
import products from "../assets/data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import "../style/ProductDetails.css";
import ProductCard from "../components/UI/product-card/ProductCart";
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/shpping-cart/CartSlice';

function ProductDetails(){

    const [tab, setTab] = useState('desc')
    const [enteredName, setEnteredName] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [reviewMsg, setReviewMsg] = useState('')
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = products.find(product => product.id === id)
    const [previewImg, setPreviewImg] = useState(product.image)
    const {name, price, category, rating, desc, image} = product
    const relatedProduct = products.filter(item => category === item.category)

    const addItem = () => {
        dispatch(cartActions.addItem({
            id,
            name,
            price,
            image
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();

        console.log(enteredName, enteredEmail, reviewMsg);
    }

    useEffect(() => {
        setPreviewImg(product.image)
    }, [product])

    useEffect(() => {
       window.scrollTo(0, 0)
    }, [product])


    return(
        <>
            <Helmet title='Product-Details'>
                <CommonSection title={name} />

                <section>
                    <Container>
                        <Row className='product_datails-align mt-5'>
                            <Col lg='2' md='2'>
                                <div className='product_images'>
                                    <div className='img_item' onClick={() => setPreviewImg(product.image)}>
                                    <img src={product.image} alt='productImg' className="w-50"  />
                                    </div>
                                    <div className='img_item mt-3' onClick={() => setPreviewImg(product.image02)}>
                                    <img src={product.image02} alt='productImg' className="w-50"  />
                                    </div>
                                    <div className='img_item mt-3' onClick={() => setPreviewImg(product.image03)}>
                                    <img src={product.image03} alt='productImg' className="w-50" />
                                    </div>
                                </div>
                            </Col>
                        
                            <Col lg='4' md='4'>
                                <div className='product_main_img'>
                                    <img src={previewImg} alt='' className='w-100' />
                                </div>
                            </Col>

                            <Col lg='6' md='6'>
                                <div className='single_product-content'>
                                    <h2 className='product_title'>{name}</h2>
                                    <p className='product_price'> {""} Price: <span><i className="fa-solid fa-indian-rupee-sign"></i>{price}/-</span></p>
                                    <p className='product_rating'><i className="ri-star-fill"></i>{rating}</p>
                                    <p>Category: <span className='category-bedge'>{category}</span></p> 
                                    <button onClick={addItem} className='product_details_btn'>Add to Cart</button>  
                                </div>
                            </Col>

                            {/* =============== Details section ================ */}    

                            <Col lg='12 mt-3'>
                                <div className="tabs d-flex align-items-center gap-5 py-3">
                                    <h6 className={` ${tab === 'desc' ? 'tab_active' : ""}`} onClick={() => setTab('desc')}>Description</h6>
                                    <h6 className={` ${tab === 'rev' ? 'tab_active' : ""}`} onClick={() => setTab('rev')}>Review</h6>
                                </div>

                                {
                                    tab === 'desc' ? <div className='tab_content'>
                                    <p>{desc}</p>
                                </div> : (
                                 <div className='tab_form'>
                                    <div className='review_text pt-4'>
                                        <p className='user_name mb-0'>Jhon Doe</p>
                                        <p className='user_email'>jhon65@gmail.com</p>
                                        <p className='feedback_text'>Nice products</p>
                                    </div>
                                    <div className='review_text'>
                                        <p className='user_name mb-0'>Shanim</p>
                                        <p className='user_email'>Shanim23@gmail.com</p>
                                        <p className='feedback_text'>Good products</p>
                                    </div>
                                    <div className='review_text'>
                                        <p className='user_name mb-0'>Jack</p>
                                        <p className='user_email'>Jack625@gmail.com</p>
                                        <p className='feedback_text'>Worth it!</p>
                                    </div>
                                    <form className='form mb-5' onSubmit={submitHandler}>
                                        <div className='form_group'>
                                            <input type='text' placeholder='Enter your name' onChange={e => setEnteredName(e.target.value)} required />
                                        </div>
                                        <div className='form_group'>
                                            <input type='email' placeholder='Enter your e-mail' onChange={e => setEnteredEmail(e.target.value)} required />
                                        </div>
                                        <div className='form_group'>
                                            <textarea rows={3} placeholder='Write your review' onChange={e => setReviewMsg(e.target.value)} required />
                                        </div>
                                        <button type='submit' className='submit_btn'>Submit</button>
                                    </form> 
                                </div>)}
                            </Col>

                            <Col lg='12'>
                                <h2 className='related_product'>You <span>might</span> also <span>like</span></h2>          
                            </Col>

                            {
                                relatedProduct.map(item => (
                                    <Col lg='3' md='4' sm='6' xs='6' key={item.id}>
                                        <ProductCard item={item} />
                                    </Col>
                                ))
                            }

                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}

export default ProductDetails;