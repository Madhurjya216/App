import React, { useState, useEffect } from 'react';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/data/products";
import ProductCard from "../components/UI/product-card/ProductCart";
import "../style/AllProducts.css";
import ReactPaginate from "react-paginate";
import "../style/Pagination.css";

const AllProduct = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const searchedProduct = products.filter((item) => {
        if(searchTerm.value === "") return item
        if(item.name.toLowerCase().includes(searchTerm.toLowerCase())) return item
    })


    const productPerPage = 10
    const visitedPage = pageNumber * productPerPage
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage)
    const pageCount = Math.ceil(searchedProduct.length / productPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    return(
    <>
        <Helmet title='All Products'>
            <CommonSection title='All Products' />

            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='6' xs='12' className='mb-5 mt-5'>
                            <div className="search_widget align-items-center d-flex justify-content-between">
                                <input type="text" name="" id="" placeholder="What I'm Looking for?" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                                <span><i className="ri-search-line"></i></span>
                            </div>
                        </Col>
                        <Col lg='6' md='6' sm='6' xs='12' className='mt-5'>
                            {/* <div className="sorting_widget text-center">
                                <select>
                                    <option>Default</option>
                                    <option vlaue="ascending">A-Z</option>
                                    <option vlaue="descending">Z-A</option>
                                    <option vlaue="high-price">High-Low</option>
                                    <option vlaue="low-price">Low-High</option>
                                </select>
                            </div> */}
                        </Col>

                        {displayPage
                            .map((item) => (
                                <Col lg='3' md='4' sm='6' xs='6' key={item.id} >
                                <ProductCard item={item} /></Col>
                            ))
                        }

                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel={"Prev"}
                                nextLabel={"Next"}
                                containerClassName=" paginationBttns "
                            />
                        </div>

                    </Row>
                </Container>
            </section>
        </Helmet>
    </>
    )
}

export default AllProduct;