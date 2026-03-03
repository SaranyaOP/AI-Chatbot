import React, { useState } from 'react'
import ChatbotIcon from './components/ChatbotIcon'
import ChatForm from './components/ChatForm'
import ChatMessage from './components/ChatMessage'

function App() {
  const [chatHistory, setChatHistory] = useState([])
  return (
    <div className='container'>
      <div className="chatbot-popup">
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button className="material-symbols-rounded">keyboard_arrow_down</button>
        </div>
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">Hello! <br/> How can I assist you today?</p>
          </div>
          {/* Render chat history message dynamically */}
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
          
        </div>
        <div className="chat-footer">
        <ChatForm  setChatHistory={setChatHistory}/>
        </div>
      </div>
    </div>
  )
}

export default App