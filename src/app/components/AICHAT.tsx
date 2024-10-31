"use client"; // Ensure this is a client component
import React, { useState } from "react"; // Import React
import { GoogleGenerativeAI } from "@google/generative-ai"; // Import the SDK

const AIChat: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSend = async () => {
    if (!userInput.trim()) return;

    // Add user's message to the chat
    setMessages((prevMessages) => [...prevMessages, `User: ${userInput}`]);
    setUserInput("");

    // Call the AI API with the user's input
    await generateAIResponse(userInput);
  };

  const generateAIResponse = async (query: string) => {
    try {
      const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_GENERATIVE_AI_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContentStream(query);

      let aiResponse = "";

      // Collect the entire response into a single string
      for await (const chunk of result.stream) {
        const chunkText = await chunk.text(); // Ensure you're waiting for the text
        aiResponse += chunkText; // Accumulate the response
      }

      // Set the complete response as a single message
      if (aiResponse) {
        setMessages((prevMessages) => [...prevMessages, `AI: ${aiResponse}`]);
      }
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setMessages((prevMessages) => [...prevMessages, "AI: An error occurred while communicating with the AI."]);
    }
  };

  return (
    <div>
      {/* Sticky AI Button */}
      <div
        onClick={toggleModal}
        className="fixed bottom-5 right-5 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full w-16 h-16 flex justify-center items-center shadow-lg cursor-pointer z-50 transition-transform transform hover:scale-110"
      >
        <span className="text-white text-2xl font-bold">🤖</span> {/* AI Logo or Emoji */}
      </div>

      {/* Modal Structure */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 flex justify-center items-center bg-black bg-opacity-70">
          <div className="bg-white mx-4 md:mx-auto p-6 rounded-lg shadow-lg w-full md:w-1/2">
            <span
              onClick={toggleModal}
              className="float-right text-2xl font-bold cursor-pointer text-gray-600"
            >
              &times;
            </span>
            <div className="flex flex-col h-80">
              <div className="flex-1 overflow-y-auto p-2 border border-gray-300 rounded-md mb-2">
                {messages.map((msg, index) => (
                  <div key={index} className={`mb-1 ${msg.startsWith("AI:") ? "text-blue-600" : "text-black"}`}>
                    {msg}
                  </div>
                ))}
              </div>
              <input
                type="text"
                value={userInput}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="w-full p-2 border border-gray-300 rounded-md mb-2 text-black placeholder-gray-400"
              />
              <button
                onClick={handleSend}
                className="p-2 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-md hover:bg-gradient-to-l transition duration-200"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
