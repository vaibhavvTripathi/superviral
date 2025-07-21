import React from "react";

type Message = {
  text: string;
  alignment: "left" | "right";
};

type Template = "ios" | "whatsapp" | "instagram";

type Props = {
  template: Template;
  messages: Message[];
};

const ChatArea: React.FC<Props> = ({ template, messages }) => (
  <>
    {template === "ios" && (
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2" style={{ background: "#f1f0f5" }}>
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.alignment === "right" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[75%] px-4 py-2.5 text-[15px] leading-[1.3] ${msg.alignment === "right" ? "bg-blue-500 text-white rounded-[18px] rounded-br-[4px] shadow-sm" : "bg-gray-200 text-black rounded-[18px] rounded-bl-[4px] shadow-sm"}`}>{msg.text || "Empty message"}</div>
          </div>
        ))}
      </div>
    )}
    {template === "whatsapp" && (
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2" style={{ background: "#e5ddd5" }}>
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.alignment === "right" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[75%] px-3 py-2 text-[14px] leading-[1.4] relative ${msg.alignment === "right" ? "bg-[#dcf8c6] text-gray-900 rounded-lg rounded-br-none shadow-sm" : "bg-white text-gray-900 rounded-lg rounded-bl-none shadow-sm"}`}>
              {msg.text || "Empty message"}
              <div className={`absolute bottom-0 ${msg.alignment === "right" ? "right-[-6px] border-l-[6px] border-l-[#dcf8c6] border-b-[6px] border-b-[#dcf8c6]" : "left-[-6px] border-r-[6px] border-r-white border-b-[6px] border-b-white"} border-t-[6px] border-t-transparent`}></div>
            </div>
          </div>
        ))}
      </div>
    )}
    {template === "instagram" && (
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2" style={{ background: "linear-gradient(to bottom, #fff, #f8f9fa)" }}>
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.alignment === "right" ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-[75%] px-4 py-3 text-[15px] leading-[1.3] ${msg.alignment === "right" ? "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcaf45] text-white rounded-[22px] shadow-sm" : "bg-gray-100 text-gray-900 rounded-[22px] border border-gray-200 shadow-sm"}`}>{msg.text || "Empty message"}</div>
          </div>
        ))}
      </div>
    )}
  </>
);

export default ChatArea; 