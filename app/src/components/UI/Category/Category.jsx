import React from 'react'
import { Container, Row, Col } from "reactstrap";
import "../../../style/Home.css"


const categoryData = [
    {
        display: "Vegetables",
        imgUrl: "https://i.ibb.co/Sy4mVWW/vegetable.png",
    },
    {
        display: "Fruits",
        imgUrl: "https://i.ibb.co/DRyYTRQ/fruit.png",
    },
    {
        display: "Diary",
        imgUrl: "https://i.ibb.co/x6tx4HC/diary-product.png",
    },

    {
        display: "Packaged foods",
        imgUrl: "https://i.ibb.co/dbyXgMB/products.png",
    },

    {
        display: "Meats",
        imgUrl: "https://i.ibb.co/yXckKkD/fish.png",
    },
]

const Category = () => {
    return (
        <>
            <Container>
                <Row>
                    {categoryData.map((item, index) => (
                        <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={index}>
                            <div className="category_item d-flex align-items-center gap-3">
                                <div className="category_img">
                                    <img src={item.imgUrl} alt="category_item" />
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Category;