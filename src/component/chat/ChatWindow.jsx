import React from 'react'
import "./css/chatwindow.scss"
import ChatHeader from './ChatHeader'
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'

function ChatWindow() {
  return (
    <div className='right-side'>
       <ChatHeader/>
       <ChatMessage/>
       <ChatInput/>
    </div>
  )
}

export default ChatWindow
