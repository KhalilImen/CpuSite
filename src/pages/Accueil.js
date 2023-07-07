import React from 'react'
import './Accueil.css'

import NavBar from "./components/NavBar"
import Aside from "./components/Aside"
import Chat from "./components/Chat"

export default function Accueil() {
    return (
        <div className="bg accueil">
            <div className="bottomGradient"></div>
            <NavBar />
            <div className="content">
                <Aside publicChat={true} />
                <Chat publicChat={true} />
            </div>
        </div>
    )
}