import React, { useRef } from "react";

function ChatForm({ setChatHistory}) {
    const inputRef = useRef();
    const handleFormSubmit = (e) => { 
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) {
            return
        }
        inputRef.current.value = "";
       // Update chat history with the new user message
       setChatHistory(history => [...history, { role: "user", text: userMessage }]);

        setTimeout(()=>  setChatHistory((history) => [...history, { role: "model", text: 'Thinking...' }]),600);
    }
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Message..."
        required
        ref={inputRef}
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
}

export default ChatForm;
