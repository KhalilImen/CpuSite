import React, { useState } from 'react'
import './Home.css'
import Robot from "../img/Robot.png"
import R from "../img/R.png"
import dev from "../img/dev.png"
import about from "../img/about.png"
import em from "../img/em.png"
import facebook from "../img/facebook.png"
import insta from "../img/insta.png"
import NavBar from "./components/NavBarHome"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { dataDigitalBestSeller } from './event';
export default function Home() {

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
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
        <div className="bg scrollbar-hide"  >
        {/***************************FirstSection**********************************/}

                 {/* shadow in the bottom of the page  */} 
                <div className="bottomGradient"></div>

                {/* the code is in the page NavBarHome.js */} 
                <NavBar />

                {/* contains the picture in the first section  */} 
                <div className="content">
                <img className="logo" src={Robot} alt="logo" />
                </div>






       
                 <div className="typing-demo" >
                 <h1>Hi, welcome to </h1>
               <h1> cyber  processing unit</h1>
                </div>
                {/* contains all the contacts  */} 
                <div className="contact">
                  Contact US
                </div>
                  <img className="emailImg" src={em} alt="email" />
                  <a className='email'>CPUISIMM@gmail.com</a>
                  <img className="faceImg" src={facebook} alt="face" />
                  <a href="https://www.facebook.com/search/top?q=cpu-isimm" className='facebook'>CPUISIMM</a>
                  <img className="instaImg" src={insta} alt="insta" />
                 <a href="https://www.instagram.com/cpu_isimm/?hl=fr" className='insta'>CPUISIMM</a>

        {/***************************SecondSection**********************************/}

                 {/*ABOUT US */}
                 <div className='about'>

                  <h1 className='titleUS'>About US</h1>
                  <img className="aboutimg" src={about} alt="about" />
                  <h1 className='TextUs'>Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна. 
                      Мы предоставляем премиум сервис по доступным ценам и всегда нацелены на успех наших клиентов.        
                      Наша команда состоит из высококлассных специалистов с международным опытом работы в сфере Web-разработки, мобильной разработки, Product менеджмента и дизайна.    
                  </h1>

                {/*ReadMore button */}
              <div class="AboutB ">
              <div class="link_wrapper ">
              <a className="linkUS rounded-3xl" href="#">Read More!</a>
               <div class="icon rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
              <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z"/>
              </svg>
              </div>
              </div>
              </div>
                 </div>

                 {/***************************ThirdSection**********************************/}
                  {/*UpComing events */}

                 <div className="UpComing">
                  <h1 className='titlevent'>Our recent events</h1>
                  <div className="hover"></div>
                  {/*Part below represents the code of the slider of events */}
                <div className="CardMain">
                  <Slider {...settings}>
                          {dataDigitalBestSeller.map((item) => (
                      <div className="card">
                          <div className="card-top">
                              <img
                              src={
                                  defaultImage[item.title] === item.title
                                  ? defaultImage.linkDefault
                                  : item.linkImg
                                  }
                                  alt={item.title}
               
                                />
                              <h1>{item.title}</h1>
                          </div>
                     
                      </div>
                        ))}
                  </Slider>
                </div>




                 </div>


                {/***************************FourthSection**********************************/}
                  {/*Formations*/}
                  <div className="for">


                <div className="box1">
                  <a href="#" className='t1'>Robotic  <br /> Trainings</a>
                  <img className="R" src={R} alt="R" />
                </div>
                   <div className="box2">
                   <img className="dev" src={dev} alt="dev" />
                  <a href="#" className='t2'>Development <br /> Trainings</a>
                </div>
                  </div>




                   {/***************************FouterSection**********************************/}
                                  <div className="fouter">
                                    <div className="ContactFouter">ContactUS</div>
                                                    <a href="https://www.facebook.com/search/top?q=cpu-isimm"><img className="facefouter" src={facebook} alt="face" /></a>  
                                                     <a href="https://www.instagram.com/cpu_isimm/?hl=fr"><img className="instaFouter" src={insta} alt="insta" /></a> 
                                                     <h1 className='tag'>© 2023-2024,  CPU</h1>
                                  </div>
                                  
        </div>
    )
}