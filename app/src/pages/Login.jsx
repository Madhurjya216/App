import React, { useState } from 'react';
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import{ Container, Row, Col } from "reactstrap";
import "../style/Login.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login(){

    const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/auth";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data);
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

    return(
        <>
            <Helmet title='Login'>
                <CommonSection title='Login' />
                <section>
                    <Container>
                        <Row>
                            <Col lg='6' md='6' sm='12' className='m-auto text-center mt-5 mb-5'>
                                <h2><span>Login</span></h2>
                                <form action="" clasName='form mb-5 mt-5' onSubmit={handleSubmit}>
                                    <div className="form_group">
                                        <input type="email" name="email" placeholder='Email' required value={data.email} onChange={handleChange} />
                                    </div>
                                    <div className="form_group">
                                        <input type="password" name="password" placeholder='Password' required value={data.password} onChange={handleChange} />
                                    </div>
                                    {error && <div className='error_msg'>{error}</div>}
                                    <button type='submit' className="login_btn">Login</button>
                                </form>
                                <Link className='login-link' to='/register'>Don't have an account? Click here</Link>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Helmet>
        </>
    )
}

export default Login;