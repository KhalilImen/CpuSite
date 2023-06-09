import React from 'react'

import botImg from "../../img/bot.svg"
import chatImg from "../../img/bubbles.svg"
import logoutImg from "../../img/logout.svg"

export default function Aside() {
    return (
        <aside className="sideBar">
            <div className="top">
                <a className="title">MAIN</a>
                <img src={botImg} alt="bot" />
                <img src={chatImg} />
            </div>
            <div className="bottom">
                <img className="logoutImg" src={logoutImg} />
            </div>
        </aside>
    )
}
