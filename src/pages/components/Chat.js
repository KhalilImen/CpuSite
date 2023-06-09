import React from 'react'

import Message from "./Message"
import MessageInput from './MessageInput'

export default function Chat({publicChat=false}) {
    return (
        <main>
            { publicChat?
                <>
                    <Message senderName="Maha Azouzi" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                    <br class="sent sep" />
                    <Message senderName="Maha Azouzi" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                    <br class="sent sep" />
                    <Message senderName="Maha Azouzi" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                    <br class="sent sep" />
                    <Message senderName="Maha Azouzi" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                    <br class="sent sep" />
                    <Message senderName="Maha Azouzi" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                    <br class="sent sep" />
                    <Message senderName="Maha Azouzi" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                    <br class="sent sep" />
                    <Message senderName="Maha Azouzi" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                    <br class="sent sep" />
                    <Message senderName="Maha Azouzi" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                </>
                :
                <>
                    <MessageInput />
                    <Message senderName="Maha Azouzi" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                    <Message senderName="Khalil Imen" messageContent="Write here you’ll find the post you can write smthing download photos or documents" amSender={true} />
                    <Message senderName="Maha Azouzi" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                    <Message senderName="Maha Azouzi" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                    <br class="sent sep" />
                    <Message senderName="Yosra Ghanmi" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                    <br class="sent sep" />
                    <Message senderName="Asma Sebaï" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                    <br class="sent sep" />
                    <Message senderName="Nassim Kraiem" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                    <br class="sent sep" />
                    <Message senderName="Safouene Ziadi" messageContent="Write here you’ll find the post you can write smthing download photos or documents" />
                </>
            }
        </main>
    )
}
