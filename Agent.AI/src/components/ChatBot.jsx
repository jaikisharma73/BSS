import React, { useState } from 'react';

const ChatBot = ({ theme }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      // Here you would add the logic to get a response from the AI
      // For now, we'll just echo the user's message
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { text: `You said: ${input}`, sender: 'bot' }]);
      }, 1000);
    }
  };

  return (
    <div className={`fixed bottom-20 right-5 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col ${theme}`}>
      <div className="p-4 bg-blue-500 text-white rounded-t-lg">
        <h3 className="text-lg font-semibold">AI Assistant</h3>
      </div>
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <p className={`inline-block p-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 dark:bg-gray-600'}`}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="p-4 border-t dark:border-gray-700 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="w-full p-2 border rounded-l-lg dark:bg-gray-700 dark:text-white"
          placeholder="Type a message..."
        />
        <button onClick={handleSend} className="bg-blue-500 text-white p-2 rounded-r-lg">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
