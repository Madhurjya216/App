import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from '../components/Helmet/Helmet';
import "../style/Contact.css";


function Contact(){

        const [enterContactName, setEnterContactName] = useState("");
        const [enterContactEmail, setEnterContactEmail] = useState("");
        const [enterContactMsg, setEnterContactMsg] = useState("");
        const contactInfo = []

    const handleContactEvent = e => {
        e.preventDefault()
        const userContactInfo = {
            name: enterContactName,
            email: enterContactEmail,
            msg: enterContactMsg
        }

        contactInfo.push(userContactInfo);
        console.log(contactInfo)
    }

    return(
        <>
            <Helmet title="Contact">
                <CommonSection title="Contact" />
                <section>
                    <Container>
                        <Row className='mt-5 d-flex align-items-center justify-center'>
                            <Col lg='4' md='6'>
                                <h3 className='contact-hd'>How can we help you?</h3>
                                <form action="/" method='post' onSubmit={handleContactEvent}>
                                <div className="form_group">
                                        <input type="text" name="contactName" placeholder='Enter your name' required  onChange={(e) => setEnterContactName(e.target.value)}/>
                                    </div>
                                    <div className="form_group">
                                        <input type="email" name="contactEmail" placeholder='Enter your email' required  onChange={(e) => setEnterContactEmail(e.target.value)}/>
                                    </div>
                                    <div className="form_group">
                                        <textarea name="contactMssg" cols="30" rows="3" placeholder='Enter your query' onChange={(e) => setEnterContactMsg(e.target.value)}></textarea>
                                    </div>
                                    <button type='submit' className="contact_btn" >Submit</button>
                                </form>
                            </Col>

                            <Col lg='6' md='6'>
                                <div className="mapouter">
                                    <div className="gmap_canvas">
                                        <iframe width="140%" height="500vh" id="gmap_canvas" src="https://maps.google.com/maps?q=india&t=&z=10&ie=UTF8&iwloc=&output=embed" frameborder="1" scrolling="no" marginheight="0" marginwidth="0">
                                        </iframe><br/>
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

export default Contact;