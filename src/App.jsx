import React, { useEffect, useRef, useState } from "react";
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { personalInfo } from "./personalInfo";

function App() {
  const [chatHistory, setChatHistory] = useState([
    { hideInChat: true, role: "model", text: personalInfo },
  ]);
  const [showChatbot, setShowChatbot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {
    //helper function to update the bot response in chat history
    const updateHistory = (text, isError = false) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== "Thinking..."),
        { role: "model", text, isError },
      ]);
    };
    history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
    const requestOprtions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contents: history }),
    };
    try {
      // Make the API request to generate bot response
      const response = await fetch(
        "/api/gemini",
        requestOprtions,
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message || "Something went wrong!");
      }
      // Extract the bot response from the API response and update chat history

      const apiResponseText = data.candidates[0].content.parts[0].text
        .replace(/\*\*(.*?)\*\*/g, "$1")
        .trim();
      updateHistory(apiResponseText);
      // setChatHistory(history => [...history, { role: "model", text: botMessage }]);
    } catch (error) {
      updateHistory(error.message, true);
      console.error("Error generating bot response:", error);
    }
  };
  useEffect(() => {
    // Scroll to the bottom of the chat body whenever chat history changes
    chatBodyRef.current.scrollTo({
      top: chatBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [chatHistory]);
  return (
    <>
      <div className="main-container">
        <div className="welcome-content">
          <h1 className="welcome-title">Hey,Meet </h1>
          <h1 className="welcome-title-2"> Saranya's AI Assistant</h1>
          <p className="welcome-description">
            I'm Saranya's AI assistant, here to share insights about her
            background, experience, skills, and projects. Feel free to ask me
            anything about Saranya!
          </p>
        </div>

        <div className={`container ${showChatbot ? "show-popup" : ""}`}>
          <button
            id="chatbot-toggler"
            onClick={() => setShowChatbot((prev) => !prev)}
          >
            <span className="material-symbols-rounded">mode_comment</span>
            {/* <span className="material-symbols-rounded">close</span> */}
          </button>
          <div className="chatbot-popup">
            <div className="chat-header">
              <div className="header-info">
                <ChatbotIcon />
                <h2 className="logo-text">Chatbot</h2>
              </div>
              <button
                onClick={() => setShowChatbot((prev) => !prev)}
                className="material-symbols-rounded"
              >
                keyboard_arrow_down
              </button>
            </div>
            <div ref={chatBodyRef} className="chat-body">
              <div className="message bot-message">
                <ChatbotIcon />
                <p className="message-text">
                  Hey,there! <br /> How can I help you today?
                </p>
              </div>
              {/* Render chat history message dynamically */}
              {chatHistory.map((chat, index) => (
                <ChatMessage key={index} chat={chat} />
              ))}
            </div>
            <div className="chat-footer">
              <ChatForm
                chatHistory={chatHistory}
                setChatHistory={setChatHistory}
                generateBotResponse={generateBotResponse}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
