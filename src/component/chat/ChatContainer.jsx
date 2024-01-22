import React from 'react'
import SideBar from './SideBar'
import ChatWindow from './ChatWindow'
import "./css/chatContainer.scss"

function ChatContainer() {
  return (
    <div className='chat-container'>
        <SideBar/>
        <ChatWindow/>
    </div>
  )
}

export default ChatContainer
