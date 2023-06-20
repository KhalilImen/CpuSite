import React from 'react'
import logo from '../../img/cpu-logo.png';


export default function NavBar() {
    return (
        <header className="navBar sticky top-0 z-10">
            <img className="logo" src={logo} alt="logo" />
              <a  class="font-bold hover:text-CPU text-xl " href="">Upcomingevents</a>
                 <a class="font-bold hover:text-CPU   text-xl " href="">Trainings</a>
                 <a class="font-bold  hover:text-CPU  text-xl " href="">Events</a>
                   <a class="font-bold hover:text-CPU  text-xl " href="">Aboutus</a><a href=""></a> <a href=""></a>      
                 <button className="login"> <div class="font-bold hover:font-serif  text-xl text-white ">login</div></button>
                 
            
        </header>
    )
}
