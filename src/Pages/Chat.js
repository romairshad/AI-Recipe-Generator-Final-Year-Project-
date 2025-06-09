import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { marked } from 'marked';

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  const GEMINI_API_KEY = 'AIzaSyA8qf3XSLVQ5o2xFC-lJH6RSjmFiUfsHzM';
  const GEMINI_API_URL =
    'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';

  const sendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const prompt = `
You are a helpful assistant that responds in clean, well-structured Markdown format.
If the user asks for a recipe, return the content in this exact style:

### 🎂 {Title}

This recipe makes a {servings}.

#### **🧾 Ingredients**

**For the Cake:**

- ingredient 1
- ingredient 2

**For the Frosting:**

- ingredient 1

#### **🔧 Equipment**

- item 1
- item 2

#### **👩‍🍳 Instructions**

**Part 1:**

1. Step 1  
2. Step 2  

**Part 2:**

1. Step 1  
2. Step 2

#### **💡 Tips & Variations**

- Tip 1
- Tip 2

User request: """${input}"""
`;

      const response = await axios.post(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        contents: [{ parts: [{ text: prompt }] }],
      });

      const rawText = response.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.';
      const formattedText = marked.parse(rawText);

      setMessages((prev) => [...prev, { text: rawText, sender: 'bot', formatted: formattedText }]);
      setInput('');
    } catch (error) {
      console.error('Error communicating with Gemini API:', error);
      setMessages((prev) => [
        ...prev,
        { text: '⚠️ Error talking to Gemini API.', sender: 'bot', formatted: '<p>Error.</p>' },
      ]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🍰 Recipe Chatbot</h1>

      <div className="border rounded p-4 h-96 overflow-y-auto mb-4 bg-gray-50">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div
              className={`inline-block p-3 rounded ${
                msg.sender === 'user' ? 'bg-blue-100' : 'bg-green-100'
              }`}
            >
              {msg.sender === 'bot' ? (
                <div
                  className="prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: msg.formatted }}
                />
              ) : (
                <span>{msg.text}</span>
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="flex">
        <input
          className="flex-1 border p-2 rounded-l"
          type="text"
          placeholder="Ask for a recipe or tip..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="bg-blue-500 text-white p-2 rounded-r" onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
