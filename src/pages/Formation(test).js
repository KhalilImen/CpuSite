import React, { useEffect, useRef, useState } from 'react';

// import Slider from './components/Slider';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Slider from 'react-slick';
import { dataFormation } from './formationData';


export default function Formation() {

    const [defaultImage, setDefaultImage] = useState({});

    const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
    return (

        <div className="CardMain">
          <Slider {...settings}>
            {dataFormation.map((item) => (
              <div className="card">
                <div className="card-top">
                  <img
                    src={
                      item.linkImg
                    }
                    alt={item.title}

                  />
                  <h1>{item.title}</h1>
                </div>

              </div>
            ))}
          </Slider>
        </div>
    );
}