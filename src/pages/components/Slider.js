import React from 'react'
import './Slider.css';
// import placeholder1 from './images/gif.gif';
// import placeholder2 from './images/gif.gif';
// import placeholder3 from './images/gif.gif';
export default function Slider({x, ease=true, ind}) {
    return (
        <div
            className="slider"
            style={{ transform: `translateX(${x}%)`, transition: `transform ${ease ? 0.25 : 0}s ease` }}
            >
            <div className={`card${(ind==0)?' center':''}`}>
                 {/* <img src={placeholder1} alt="slide_image" draggable={false} /> */}
                <div className="videoBg"></div> 
               <label>java</label>
            </div>
            <div className={`card${(ind==1)?' center':''}`}>
                {/* <img src={placeholder2} alt="slide_image" draggable={false} /> */}
                <div className="videoBg"></div>
                <label>html/css</label>
            </div>
            <div className={`card${(ind==2)?' center':''}`}>
                {/* <img src={placeholder3} alt="slide_image" draggable={false} /> */}
                <div className="videoBg"></div>
                <label>C avanceé</label>
            </div>
        </div>
    )
}