import React, { useEffect } from 'react'
import 'animate.css';
import WOW from 'wow.js';
const Test = () => {
    useEffect(() => {
        // Initialize Wow.js
        new WOW().init();
      }, []);
  return (
    <div>
                <h3 className=" wow fadeIn" data-wow-duration="2s" data-wow-delay="5s">All Projects</h3>

    </div>
  )
}

export default Test
