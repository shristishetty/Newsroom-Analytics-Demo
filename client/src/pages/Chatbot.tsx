"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { type: "incoming", text: "Hello! How can I assist you today?" },
  ]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { type: "outgoing", text: input }]);
    setInput("");

    // Mock a bot response after 1s
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "incoming", text: "Thanks for reaching out! How can I help?" },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="shadow-lg bg-blue-600 hover:bg-blue-700 text-white rounded-xl p-2 flex items-center justify-center"
      >
        {isOpen ? <span className=""></span> : "Chat"}
      </Button>

      {/* Chat Window */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        )}
      >
        {isOpen && (
          <div className="relative w-80 mt-4 bg-zinc-900 rounded-lg shadow-lg">
            {/* Chat Header */}
            <div className="p-3 bg-zinc-900 text-white rounded-t-lg flex justify-between items-center">
              <span>Chat with us</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xl hover:text-gray-300 focus:outline-none"
              >
                &times;
              </button>
            </div>

            {/* Chat Body */}
            <div className="h-64 p-3 overflow-y-auto space-y-2 text-sm">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={cn(
                    "px-4 py-2 w-fit max-w-[75%] break-words",
                    msg.type === "incoming"
                      ? "bg-gray-100 text-gray-800 rounded-r-xl rounded-bl-xl"
                      : "bg-zinc-800 text-white ml-auto rounded-l-xl rounded-br-xl"
                  )}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Chat Footer */}
            <div className="p-3 border-t border-gray-700 flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 text-black rounded-full px-4"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
              >
                Send
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}



    

// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { cn } from "@/lib/utils";
// import axios from "axios"; // Import axios

// export default function Chatbot() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([
//     { type: "incoming", text: "Hello! How can I assist you today?" },
//   ]);

//   const handleSendMessage = async () => {
//     if (!input.trim()) return;

//     // Add user's message
//     setMessages([...messages, { type: "outgoing", text: input }]);
//     const userMessage = input;
//     setInput("");

//     try {
//       // Send question to Flask server
//       const response = await axios.post("http://localhost:5000/ask", {
//         question: userMessage,
//       });

//       // Add AI's response to messages
//       const botAnswer = response.data.answer;
//       setMessages((prev) => [
//         ...prev,
//         { type: "incoming", text: botAnswer },
//       ]);
//     } catch (error) {
//       console.error("Error communicating with server:", error);
//       setMessages((prev) => [
//         ...prev,
//         { type: "incoming", text: "Sorry, something went wrong. Please try again." },
//       ]);
//     }
//   };

//   return (
//     <div className="fixed bottom-4 right-4 z-50">
//       {/* Floating Button */}
//       <Button
//         onClick={() => setIsOpen(!isOpen)}
//         className="shadow-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 flex items-center justify-center"
//       >
//         {isOpen ? <span className="text-lg font-bold">&times;</span> : "Chat"}
//       </Button>

//       {/* Chat Window */}
//       <div
//         className={cn(
//           "transition-all duration-300 ease-in-out",
//           isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
//         )}
//       >
//         {isOpen && (
//           <div className="relative w-80 mt-4 bg-zinc-900 rounded-lg shadow-lg">
//             {/* Chat Header */}
//             <div className="p-3 bg-zinc-900 text-white rounded-t-lg flex justify-between items-center">
//               <span>Chat with us</span>
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="text-white text-xl hover:text-gray-300 focus:outline-none"
//               >
//                 &times;
//               </button>
//             </div>

//             {/* Chat Body */}
//             <div className="h-64 p-3 overflow-y-auto space-y-2 text-sm">
//               {messages.map((msg, index) => (
//                 <div
//                   key={index}
//                   className={cn(
//                     "px-4 py-2 w-fit max-w-[75%] break-words",
//                     msg.type === "incoming"
//                       ? "bg-gray-100 text-gray-800 rounded-r-xl rounded-bl-xl"
//                       : "bg-zinc-800 text-white ml-auto rounded-l-xl rounded-br-xl"
//                   )}
//                 >
//                   {msg.text}
//                 </div>
//               ))}
//             </div>

//             {/* Chat Footer */}
//             <div className="p-3 border-t border-gray-700 flex gap-2">
//               <Input
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 placeholder="Type a message..."
//                 className="flex-1 text-black rounded-full px-4"
//               />
//               <Button
//                 onClick={handleSendMessage}
//                 className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
//               >
//                 Send
//               </Button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
