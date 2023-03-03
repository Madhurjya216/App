import React, { useRef } from 'react'
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import "../../style/Header.css";
import { useSelector, useDispatch } from "react-redux";
import { cartUiActions } from "../../store/shpping-cart/CartUiSlice";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "../../pages/Login"
import Register from "../../pages/Register"
// import Logout from "../../pages/Main"





const nav_link = [
    {
        display: 'Home',
        path: '/home'
    },
    {
        display: 'Products',
        path: '/allproduct'
    },
    {
        display: 'Cart',
        path: '/cart'
    },
    {
        display: 'Contact',
        path: '/contact'
    }
]

function Header({theme, toggleTheme}){

    const menuRef = useRef(null);

    const totalQuantity = useSelector(state =>state.cart.totalQuantity);
    const dispatch = useDispatch()

    const toggleMenu = () => menuRef.current.classList.toggle('show_menu');

    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }

return(
<>
    <header className='header'>
        <Container>
            <div className="nav_wrapper d-flex align-items-center justify-content-between">
                {/*============ logo part ========== */}
                <div className="logo">
                    <img src="https://i.ibb.co/Dfzn18s/GROMO-LOGO.png" alt="gromo logo" />
                </div>

                {/*============ menu part ========== */}
                <div className="navigation" ref={menuRef}>
                    <div className="menu d-flex align-items-center gap-5">
                        {
                            nav_link.map((item, index) => (
                                <NavLink onClick={toggleMenu} to={item.path} key={index}
                                className={navClass => navClass.isActive ? 'active_menu' : ""}>{item.display}</NavLink>
                            ))
                        }
                    </div>
                </div>

                {/* =============== nav icons ============= */}
                <div className="nav_right d-flex align-items-center gap-4">
                    <span className="cart_icon" onClick={toggleCart}> 
                        <i className="ri-shopping-basket-line"></i>
                        <span className="cart_badge">{totalQuantity}</span>
                    </span>

                    <div className='light_mode'>
                        <span onClick={toggleTheme}>
                            {
                                theme === 'dark-theme' ? ( 
                                <span><i className="ri-sun-line"></i></span>
                                 ) : (
                                <span><i className="ri-moon-line"></i></span>
                                )
                            }
                        </span>
                    </div>

                    <span className="user">
                        <Link className='user-login' to='/login'><i className="ri-user-3-line"></i></Link>
                    </span>

                    <span className="mobile_menu" onClick={toggleMenu}>
                        <i className="ri-menu-3-line"></i>
                    </span>
                </div>
            </div>
        </Container>
    </header>
</>
)
}

export default Header;