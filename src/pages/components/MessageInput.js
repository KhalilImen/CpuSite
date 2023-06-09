import React from 'react'

export default function MessageInput() {
    return (
        <div class="messageInput">
            <input type='text' placeholder="Have any news ?" />
            {/* <textarea type='text' placeholder="Have any news ?" /> */}
            <span className="highlighter"></span>
            <button className="postBtn">Post</button>
        </div>
    )
}
