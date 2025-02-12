import React  , {useEffect}from 'react'
import 'animate.css';
import WOW from 'wow.js';
import Footer from './Footer';
import './App.css'
import From from './From'
import { Container, Row, Col } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import Latest from './Latest';

const Home = () => {
    useEffect(() => {
        // Initialize Wow.js
        new WOW().init();
      }, []);

  return (
   <>
      <section className="bannar">
        <Container>
          <Row>
            <Col md={7} sm={12} className="bannartext wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
              <p>WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span> SEO</p>
              <h1>ABDELRAHMAN ELWAKEL Portfolio .</h1>
              <h5>We build marketing websites that help you sell on autopilot.</h5>
              <HashLink to="/#contact"><button>Let's talk</button></HashLink>
            </Col>
            <Col md={5} sm={12} className="bannarimgs wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
              <img src="images/623503637e979197919c6c03_Topology-1 (1).svg" alt="" className="waves" />
              <img src="images/623a183aa76fb537cbc5dc0e_Group 8-p-500.png" alt="" className="laptop" />
              <div className="imgbox gimg">
                <img src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg" alt="" />
              </div>
              <div className="imgbox uimg">
                <img src="images/6232406724bd9b36622aed48_image 3 (Traced).svg" alt="" />
              </div>
              <div className="imgbox wimg">
                <img src="images/623240674411e07510215b6f_image 2 (Traced).svg" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
        <Latest/>
        <From />
        <Footer/>
      </>
  )
}

export default Home
