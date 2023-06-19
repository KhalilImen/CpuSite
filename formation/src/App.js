import React, { useEffect, useRef, useState } from 'react';

import Slider from './Slider';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function App() {
    const [t1, setT1] = useState(0)
    const [ee1, setEe1] = useState(true)

    const [t2, setT2] = useState(100)
    const [ee2, setEe2] = useState(true)

    const [index, setIndex] = useState(1)

    const SLIDES_COUNT = 3;
    function right() {
        setIndex(prevI => (prevI + 1) % 3);
        if (t1 <= -100 + (100 / SLIDES_COUNT)) {
            setEe1(false);
            setTimeout(() => {
                setT1(prevT => prevT + 200);
                setTimeout(() => {
                    setEe1(true);
                    setTimeout(() => {
                        setT1(prevT => prevT - (100 / SLIDES_COUNT));
                    }, 50);
                }, 50);
            }, 50);
        }
        else
            setT1(prevT => prevT - (100 / SLIDES_COUNT));
        if (t2 <= -100 + (100 / SLIDES_COUNT)) {
            setEe2(false);
            setTimeout(() => {
                setT2(prevT => prevT + 200);
                setTimeout(() => {
                    setEe2(true);
                    setTimeout(() => {
                        setT2(prevT => prevT - (100 / SLIDES_COUNT));
                    }, 50);
                }, 50);
            }, 50);
        }
        else
            setT2(prevT => prevT - (100 / SLIDES_COUNT));
    }

    function left() {
        setIndex(prevI => (prevI + 2) % 3);
        if (t1 >= 100 - (100 / SLIDES_COUNT)) {
            setEe1(false);
            setTimeout(() => {
                setT1(prevT => prevT - 200);
                setTimeout(() => {
                    setEe1(true);
                    setTimeout(() => {
                        setT1(prevT => prevT + (100 / SLIDES_COUNT));
                    }, 50);
                }, 50);
            }, 50);
        }
        else
            setT1(prevT => prevT + (100 / SLIDES_COUNT));
        if (t2 >= 100 - (100 / SLIDES_COUNT)) {
            setEe2(false);
            setTimeout(() => {
                setT2(prevT => prevT - 200);
                setTimeout(() => {
                    setEe2(true);
                    setTimeout(() => {
                        setT2(prevT => prevT + (100 / SLIDES_COUNT));
                    }, 50);
                }, 50);
            }, 50);
        }
        else
            setT2(prevT => prevT + (100 / SLIDES_COUNT));
    }


    
    
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [canMove, setCanMove] = useState(true);
    const initialXRef = useRef(0);
    function handleMouseDown(event) {
        setIsMouseDown(true);
        // Additional logic you want to perform when the mouse is down
        //console.log("down");
        initialXRef.current = event.clientX;
    };
    useEffect(() => {
        const handleMouseUp = () => {
            setIsMouseDown(false);
            setCanMove(true)
            // Additional logic you want to perform when the mouse is up
            console.log("up");
        };
        window.addEventListener('mouseup', handleMouseUp);
        return () => {
            document.body.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);
    useEffect(() => {
        const handleMouseMove = (event) => {
            if (isMouseDown && canMove) {
                console.log("move");
                const deltaX = event.clientX - initialXRef.current;
                //setDeltaX(deltaX);
                if(deltaX > (window.innerWidth/(2*SLIDES_COUNT))) {
                    initialXRef.current = event.clientX;
                    left()
                    setCanMove(false);
                    setTimeout(() => {
                        setCanMove(true);
                    }, 200);
                } else if(deltaX < (-window.innerWidth/(2*SLIDES_COUNT))) {
                    initialXRef.current = event.clientX;
                    right()
                    setCanMove(false);
                    setTimeout(() => {
                        setCanMove(true);
                    }, 200);
                }
            }
        };
        document.body.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.body.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isMouseDown, canMove]);




    return (
        <div className="container">
          <div className="vector"></div>
         
          {/* <div className='title'><h1 className="heading">Formation</h1></div> */}
            
            {/* <div className="controls"> */}
                {/* <button className='logo-left' onClick={right}>&gt;</button>
                <button className='logo-right' onClick={left}>&lt;</button> */}
               
            {/* </div> */}
             <div className="slider-wrapper" onMouseDown={handleMouseDown}>
                <Slider x={t1} ease={ee1} ind={index} />
                <Slider x={t2} ease={ee2} ind={index} />
            </div>
            <div className="logo-left" onClick={right}> <i className="fas fa-arrow-left  fa-3x"></i>  </div>
                  <div className="logo-right"  onClick={left} ><i className="fas fa-arrow-right fa-3x"></i> </div>
        </div>
    );
}