import React, {useState, useEffect} from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routes from "../../routes/Router";
import Carts from '../UI/cart/Carts';
import { useSelector } from "react-redux";
import "../../style/Header.css"




function Layout(){

    const toggleTheme = () => {
        theme === '' ? setTheme('dark-theme') : setTheme('')
    }
    const [theme, setTheme] = useState('');
    const showCart = useSelector(state => state.cartUi.cartIsVisible)
    useEffect(() => {
      document.body.className = theme
    }, [theme])

    return(
    <>
        <Header theme={theme} toggleTheme={toggleTheme} />
        {
            showCart && <Carts />
        }
        <div>
            <Routes />
        </div>
        <Footer />
    </>
    )
}

export default Layout;