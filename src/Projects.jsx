import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import WOW from 'wow.js';
import './App.css'
const Projects = () => { 
    const [Projects , SetProjectes ] = useState([]) ;

    useEffect(() => {
      new WOW().init();
        axios.get('data.json') .then ((res) => {
            SetProjectes(res.data.projects)
        })
    } , [])
  return (
<>
<section className="sec3"> 
<h1 className='wow fadeInUp' data-wow-duration='2s'  data-wow-delay="1s">All projects</h1>
<img  className ='waves 'src="images/623503637e979197919c6c03_Topology-1 (1).svg" alt="" />
     <Container>
      <Row>
        {Projects.map((project) => (
          
          <Col key={project.id} md={6} sm={12} lg={4} >
          
                   <div className="wow fadeInUp div-1" data-wow-duration="2s" data-wow-delay="1s">
                                    <img src={project.photo} alt="" />
                                    <h5>{project.title}</h5>
                                    <p>{project.description}</p>
                                    <a href={project.link} target="_blank">View</a>
                                </div>
          </Col>
        ))}
      </Row>
    </Container>
</section>
</>
  )
}

export default Projects
//service_wpz6s2u servive-id 