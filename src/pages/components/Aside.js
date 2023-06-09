import React, { useState } from 'react';

import botImg from "../../img/bot.svg"
import chatImg from "../../img/bubbles.svg"
import logoutImg from "../../img/logout.svg"

import user from "../../img/user.png"

export default function Aside({publicChat=false}) {
    const [expanded, setExpanded] = useState(false);

    function handleExpand(){
        setExpanded(!expanded);
    }

    return (
        <>{ publicChat ?
                <aside className="sideBar" data-expanded={expanded}>
                    <div className="top">
                        <a className="title">MAIN</a>
                        <img src={botImg} alt="bot" />
                        <img src={chatImg} />
                    </div>
                    <div className="bottom">
                        <img className="logoutImg" src={logoutImg} />
                    </div>
                </aside>
            :
                <aside className="sideBar" data-expanded={expanded}>
                    <div className="top">
                        <div className="comiteInfo">
                            <img className="chefImg" src={user} />
                            <div className="info">
                                <a className="chefName">NOM CHEF</a>
                                <br/>
                                <a className="comiteName">Comite</a>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <a className="title">MAIN</a>
                        <img src={botImg} alt="bot" />
                        <img src={chatImg} />
                    </div>
                    <div className="bottom">
                        <img className="logoutImg" src={logoutImg} />
                    </div>
                    <button className="expandBtn" onClick={handleExpand}>&gt;</button>
                </aside>
        }
        </>
    )
}
