import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../style/Home.css"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import Category from "../components/UI/Category/Category.jsx";
import products from "../assets/data/products.js"
import ProductCart from "../components/UI/product-card/ProductCart";
import ReviewsSlider from "../components/UI/slider/ReviewsSlider";
import Weather from "./Weather"


const featureData = [
    {
        title: 'Fast Delivery',
        imgUrl: 'https://i.ibb.co/dL2WXg5/Fast-loading-rafiki-1.png',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.'
    },
    {
        title: 'Offers & Discounts',
        imgUrl: 'https://i.ibb.co/D5sSPXD/Discount-pana.png',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.'
    },
    {
        title: 'Easy Return',
        imgUrl: 'https://i.ibb.co/r2qj5wz/Refund-pana.png',
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.'
    },
]

function Home(){

    const [category, setCategory] = useState('All');
    const [allProducts, setAllProducts] = useState(products);

    useEffect(() => {
        if(category === 'All'){
            setAllProducts(products);
        }

        if(category === 'Vegetables'){
            const filteredProducts = products.filter(item => item.category === ' Vegetables')
            setAllProducts(filteredProducts)
        }

        if(category === 'Fruits'){
            const filteredProducts = products.filter(item => item.category === ' Fruits')
            setAllProducts(filteredProducts)
        }

        if(category === 'Diary'){
            const filteredProducts = products.filter(item => item.category === 'Diary products')
            setAllProducts(filteredProducts)
        }

        if(category === 'Meats'){
            const filteredProducts = products.filter(item => item.category === 'Fresh meat')
            setAllProducts(filteredProducts)
        }

        if(category === 'Packaged food'){
            const filteredProducts = products.filter(item => item.category === 'Packaged foods')
            setAllProducts(filteredProducts)
        }
    }, [category])

    return(
        <Helmet title="Home">

                {/* ==================== home section ======================= */}

                <section>
                    <div className="main-bg">
                        <div className="main-heading"> 
                            <h1 id="hd"><span>Fresh</span> And <span>Hygienic</span> Products <br /></h1>
                            <h3 className="hd">We serves the best for you</h3>
                            <h2 className="hd">To Lead A Healthy and Energetic Life</h2>
                            
                        </div>
                    </div>

                {/* ==================== weather app section ======================= */}

                    <section>
                        <Weather />
                    </section>

                {/* ==================== category section ======================= */}

                    <section className='category-sec'>
                        <Category />
                    </section>

                {/* ==================== feature section ======================= */}

                    <section className="main-text">
                        <Container>
                            <Row>
                                <Col lg='12' className='text-center'>
                                    <h1>Stay <span>Ease</span> at <span>Home</span></h1>
                                    <h2>We will look after</h2>
                                    <p className='feature-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas excepturi<br />id aspernatur dolores quasi deserunt temporibus neque! Assumenda quas earum<br />facere dolor, voluptatum maiores nobis atque molestias ad quia illo?</p>
                                </Col>
                                {featureData.map((item, index) => (
                                    <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                                        <div className="feature_item text-center px-5 py-3">
                                        <img
                                            src={item.imgUrl}
                                            alt="feature-img"
                                            className="mb-3"
                                        />
                                        <h5 className="feature_title fw-bold mb-3">{item.title}</h5> 
                                        <p>{item.desc}</p>
                                        </div>
                                    </Col>
                                    ))
                                }
                            </Row>
                        </Container>
                    </section>

                    <section className="product-sample">
                        <Container>
                        <Row>
                            <Col lg='12' className='text-center'>
                                <h2>Popular <span>Products</span></h2>
                                <hr className='hr' />
                            </Col>

                            <Col lg='12'>
                                <div className="product_category">
                                    <button className={`all_btn ${category === 'All' ? 'productBtnActive' : ''} `} onClick={() => setCategory('All')}>All</button>
                                    <button className={`all_btn ${category === 'Vegetables' ? 'productBtnActive' : ''} `} onClick={() => setCategory('Vegetables')}><img src="https://i.ibb.co/Sy4mVWW/vegetable.png" alt="veg-category" />Vegetables</button>
                                    <button className={`all_btn ${category === 'Fruits' ? 'productBtnActive' : ''} `} onClick={() => setCategory('Fruits')}><img src="https://i.ibb.co/DRyYTRQ/fruit.png" alt="veg-category" />Fruits</button>
                                    <button className={`all_btn ${category === 'Diary' ? 'productBtnActive' : ''} `} onClick={() => setCategory('Diary')}><img src="https://i.ibb.co/x6tx4HC/diary-product.png" alt="veg-category" />Diary</button>
                                    <button className={`all_btn ${category === 'Meats' ? 'productBtnActive' : ''} `} onClick={() => setCategory('Meats')}><img src="https://i.ibb.co/yXckKkD/fish.png" alt="veg-category" />Meats</button>
                                    <button className={`all_btn ${category === 'Packaged food' ? 'productBtnActive' : ''} `} onClick={() => setCategory('Packaged food')}><img src="https://i.ibb.co/dbyXgMB/products.png" alt="veg-category" />Packaged food</button>
                                </div>
                            </Col>

                            {
                                allProducts.map(item => (
                                <Col lg='3' md='4' key={item.Product_id} className='mt-3'>
                                    <ProductCart item={item} />
                                </Col>
                                ))
                            }   
                        </Row>
                        </Container>
                    </section>

                    <section className='choose'>
                        <Container>
                            <Row className='choose-align'>
                                <Col lg='6' md='6'>
                                    <img src='https://i.ibb.co/SRbVR5j/Hello-rafiki.png' alt='choose' className='w-100'/>
                                </Col>

                                <Col lg='6' md='6'>
                                    <h2 className='choose-head mb-4'>Why to <span>Choose Us</span></h2>
                                    <hr className='hr hrLeft' />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, minus. Tempora reprehenderit a corporis velit, laboriosam vitae ullam, repellat illo sequi odio esse iste fugiat dolor, optio incidunt eligendi deleniti!</p>

                                    <ListGroup>
                                        <ListGroupItem className='border-0 ps-0 choose_background'>
                                        <p className='list-head d-flex align-items-center gap-2'>
                                            <i className="ri-checkbox-circle-line"></i><span>Fresh and Hygenic Products</span>
                                        </p>
                                        <p className='list-line'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                                        </ListGroupItem>

                                        <ListGroupItem className='border-0 ps-0 choose_background'>
                                        <p className='list-head d-flex align-items-center gap-2'>
                                            <i className="ri-checkbox-circle-line"></i><span>Quality Support</span>
                                        </p>
                                        <p className='list-line'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                                        </ListGroupItem>

                                        <ListGroupItem className='border-0 ps-0 choose_background'>
                                        <p className='list-head d-flex align-items-center gap-2'>
                                            <i className="ri-checkbox-circle-line"></i><span>Order from any Location</span>
                                        </p>
                                        <p className='list-line'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, voluptatibus.</p>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </Container>
                    </section>

                    <section className='reviews'>
                        <Container>
                            <Row className='reviews-align'>
                                <Col lg='6' md='6'>
                                    <div>
                                    <h5>Testimonial</h5>
                                    <h2>What our <span>Customer's Reviews</span></h2>
                                    <ReviewsSlider />
                                    </div>
                                </Col>

                                <Col lg='6' md='6'>
                                    <img src="https://i.ibb.co/Sn196Yw/Online-Review-cuate.png" alt="reviews" className='w-100' />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </section>
        </Helmet>
    )
}

export default Home;