import React from 'react'

export default function Message({senderName, messageContent, amSender=false}) {
    return (
        <div class={amSender? "sent" : "received"}>
            <div className="message"><a className="sender">{senderName}</a><p>{messageContent}</p></div>
        </div>
    )
}
