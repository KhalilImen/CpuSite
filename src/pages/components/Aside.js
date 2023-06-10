import React, { useState } from 'react';

import botImg from "../../img/bot.svg"
import chatImg from "../../img/bubbles.svg"
import logoutImg from "../../img/logout.svg"

import user from "../../img/user.png"
import member from "../../img/member.svg"
import home from "../../img/home.svg"
import downArrow from "../../img/downArrow.svg"
import Member from './Member';

export default function Aside({publicChat=false}) {
    const [expanded, setExpanded] = useState(false);
    function handleExpand(){
        setExpanded(prevExpanded => !prevExpanded);
    }


    const [membersExpanded, setMembersExpanded] = useState(false);
    function handleExpandMembers(){
        setMembersExpanded(prevExpanded => !prevExpanded);
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
                        <div className="generalFeed">
                            <img src={home} alt="general feed" />
                            <a>general feed</a>
                        </div>
                        <div className="members" data-members-expanded={membersExpanded}>
                            <img src={member} alt="members" />
                            <a>members</a>
                            <button onClick={handleExpandMembers} ><img src={downArrow} alt="v" /></button>
                        </div>
                        <div className="membersList">
                            <Member name="Nassim Kraiem" />
                            <Member name="Nassim Kraiem" />
                            <Member name="Nassim Kraiem" />
                        </div>
                        <div className="divider"></div>
                        {/* <img src={botImg} alt="bot" /> */}
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
