import React from 'react'

import logo from '../../img/cpu-logo.png';
import userImg from '../../img/user.png'
import notifIcon from '../../img/bell.svg'

export default function NavBar() {
    return (
        <header className="navBar">
            <img className="logo" src={logo} alt="logo" />
            <div className="searchBar">
                <input type="search" placeholder="Search" />
                <span className="highlighter"></span>
            </div>
            <div className="right">
                <a className="username">KHALIL IMEN</a>
                <img className="userImg" src={userImg} alt="userImg"/>
                <img className="notifIcon" src={notifIcon} alt="notifications"/>
            </div>
        </header>
    )
}
