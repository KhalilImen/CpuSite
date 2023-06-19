import React from 'react'
import './Accueil.css'

import NavBar from "./components/NavBar"
import Aside from "./components/Aside"
import Chat from "./components/Chat"

export default function Accueil() {
    return (
        <div className="bg">
            <div className="bottomGradient"></div>
            <NavBar />
            <div className="content">
                <Aside publicChat={false} />
                <Chat publicChat={false} />
            </div>
        </div>
    )
}