import React from 'react';
import Slider from "react-slick";
import "../../../style/Home.css"

function ReviewsSlider() {

    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <>
            <Slider {...settings}>
                <div className='review-slide'>
                    <div className=" slider_content d-flex align-items-center gap-3 ">
                    <img src="https://img.freepik.com/free-photo/young-bearded-hindu-student-with-backpack-pastel-wall_496169-1524.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph" alt="avatar" className=" rounded" />
                    <div>
                    <h6>Jhon Doe</h6>
                    <span>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    </span>
                    </div>
                    </div>
                    <br />
                    <p className="review_text">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                    atque, quam minus totam maiores laborum! Impedit consectetur illum
                    aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                    quis dolorem quas!"
                    </p>
                </div>
                <div className='review-slide'>
                    <div className=" slider_content d-flex align-items-center gap-3 ">
                    <img src="https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph" alt="avatar" className=" rounded" />
                    <div>
                    <h6>Shanim</h6>
                    <span>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                    </span>
                    </div>
                    </div>
                    <br />
                    <p className="review_text">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                    atque, quam minus totam maiores laborum! Impedit consectetur illum
                    aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                    quis dolorem quas!"
                    </p>
                </div>
                <div className='review-slide'>
                    <div className=" slider_content d-flex align-items-center gap-3 ">
                    <img src="https://img.freepik.com/free-photo/image-handsome-happy-guy-christmas-sweater-smiling-looking-camera-celebrating-xmas-holidays-standing-red-background_1258-63133.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph" alt="avatar" className=" rounded" />
                    <div>
                    <h6>Jack</h6>
                    <span>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                    </span>
                    </div>
                    </div>
                    <br />
                    <p className="review_text">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                    atque, quam minus totam maiores laborum! Impedit consectetur illum
                    aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                    quis dolorem quas!"
                    </p>
                </div>
                <div className='review-slide'>
                    <div className=" slider_content d-flex align-items-center gap-3 ">
                    <img src="https://img.freepik.com/free-photo/portrait-young-happy-blogger-with-modern-laptop-outdoors_231208-2070.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph" alt="avatar" className=" rounded" />
                    <div>
                    <h6>Laila</h6>
                    <span>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    </span>
                    </div>
                    </div>
                    <br />
                    <p className="review_text">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                    atque, quam minus totam maiores laborum! Impedit consectetur illum
                    aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                    quis dolorem quas!"
                    </p>
                </div>
                <div className='review-slide'>
                    <div className=" slider_content d-flex align-items-center gap-3 ">
                    <img src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph" alt="avatar" className=" rounded" />
                    <div>
                    <h6>Sakira</h6>
                    <span>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-half-fill"></i>
                    </span>
                    </div>
                    </div>
                    <br />
                    <p className="review_text">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                    atque, quam minus totam maiores laborum! Impedit consectetur illum
                    aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                    quis dolorem quas!"
                    </p>
                </div>
                <div className='review-slide'>
                    <div className=" slider_content d-flex align-items-center gap-3 ">
                    <img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg&uid=R81204783&ga=GA1.2.1145224334.1665120416&semt=sph" alt="avatar" className=" rounded" />
                    <div>
                    <h6>Shyam</h6>
                    <span>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    </span>
                    </div>
                    </div>
                    <br />
                    <p className="review_text">
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                    atque, quam minus totam maiores laborum! Impedit consectetur illum
                    aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
                    quis dolorem quas!"
                    </p>
                </div>
            </Slider>
        </>
    )
}

export default ReviewsSlider;