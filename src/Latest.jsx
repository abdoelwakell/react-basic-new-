import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, FreeMode } from 'swiper/modules';
import axios from 'axios';
import 'swiper/swiper-bundle.css';
import { Link } from 'react-router-dom';
import './App.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Latest = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('data.json').then((res) => {
      setProjects(res.data.projects);
    });
  }, []);

  return (
    <>
       <section className="homesec3" id="latest">
        <div className="sectext wow fadeIn" data-wow-duration="2s" data-wow-delay="0.1s">
          <h3>Latest builds.</h3>
         
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s"
        >
          {projects.slice(1, 6).map((project) => (
            <SwiperSlide key={project.id}><a href={project.link} target="_blank"><img src={project.photo} alt="" /></a></SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Latest;
