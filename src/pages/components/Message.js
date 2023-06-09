import React from 'react'

export default function Message({senderName, messageContent}) {
    return (
        <div class="received">
            <div className="message"><a className="sender">{senderName}</a><p>{messageContent}</p></div>
        </div>
    )
}
