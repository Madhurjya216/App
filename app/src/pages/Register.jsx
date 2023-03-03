import React, { useState } from 'react';
import{ Container, Row, Col } from "reactstrap";
import "../style/Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

function Register(){
    
    const [data, setData] = useState({
		firstName: "",
        lastName: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
                <section>
                    <Helmet title='Signup'>
                        <CommonSection title='signup' />
                    <Container>
                        <Row>
                            <Col lg='6' md='6' sm='12' className='m-auto text-center mt-5 mb-5'>
                                <h2><span>Create Account</span></h2>
                                <form action="" clasName='form mb-5 mt-5' onSubmit={handleSubmit}>
                                <div className="form_group">
                                        <input type="text" name="firstName" placeholder='First name' required onChange={handleChange} value={data.firstName} />
                                    </div>
                                    <div className="form_group">
                                        <input type="text" name="lastName" placeholder='Last name' required onChange={handleChange} value={data.lastName} />
                                    </div>
                                    <div className="form_group">
                                        <input type="email" name="email" placeholder='Email' required onChange={handleChange} value={data.email} />
                                    </div>
                                    <div className="form_group">
                                        <input type="password" name="password" placeholder='Password' required onChange={handleChange} value={data.password} />
                                    </div>
                                    {error && <div className='error_msg'>{error}</div>}
                                    <button type='submit' className="login_btn">Signup</button>
                                </form>
                                <Link className='login-link' to='/login'>Already have an account? Click here</Link>
                            </Col>
                        </Row>
                    </Container>
                    </Helmet>
                </section>
        </>
    )
}

export default Register;

// ref={signupNameRef} - in input fields