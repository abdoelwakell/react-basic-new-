import React, { useState, useRef } from 'react';
import './App.css'
import { Container, Row, Col } from 'react-bootstrap';
import emailjs from '@emailjs/browser'
const From = () => {
  const form = useRef();

  const sendEmail = (e) => {
    alert("message sent successfully")
    e.preventDefault();
    emailjs.sendForm('service_wpz6s2u', 'template_lysgxxl', form.current, 'CD6fwW4y0czOXmy4O')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset()
  };
  return (
<>
<section className="homesec6" id="contact">
        <Container>
          <h3 className="wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">Contact Us</h3>
          <Row className="align-items-center">
            <Col md={6} sm={12} className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
              <div>
                <p><span>Email:</span> info@gmail.com</p>
                <p><span>Phone:</span> 0121133133131</p>
                <p><span>Address:</span> 23 street newyork</p>
              </div>
            </Col>
            <Col md={6} sm={12} className="wow bounceInRight" data-wow-duration="2s" data-wow-delay="0.3s">
              <div>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="d-flex">
                    <input type="text" name="name" placeholder="Name" />
                    <input type="text" name="company" placeholder="Company" />
                  </div>
                  <div className="d-flex">
                    <input type="text" name="email" placeholder="Email" />
                    <input type="text" name="phone" placeholder="Phone" />
                  </div>
                  <textarea name="message" placeholder="Message"></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </Col>

          </Row>
        </Container>
      </section>
</>
  )
}

export default From
// template_lysgxxl  
// CD6fwW4y0czOXmy4O 
//service_wpz6s2u