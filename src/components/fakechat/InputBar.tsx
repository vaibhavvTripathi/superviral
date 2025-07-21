import { Send } from "lucide-react";
import React from "react";

type Template = "ios" | "whatsapp" | "instagram";

type Props = {
  template: Template;
};

const InputBar: React.FC<Props> = ({ template }) => (
  <>
    {template === "ios" && (
      <div className="h-12 flex items-center px-4 bg-white border-t border-gray-200">
        <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-500">iMessage</div>
        <div className="ml-3 p-2 bg-blue-500 rounded-full"><Send className="h-4 w-4 text-white" /></div>
      </div>
    )}
    {template === "whatsapp" && (
      <div className="h-12 flex items-center px-4 bg-gray-50 border-t border-gray-200">
        <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-500 border border-gray-200">Type a message</div>
        <div className="ml-3 p-2 bg-[#25d366] rounded-full"><Send className="h-4 w-4 text-white" /></div>
      </div>
    )}
    {template === "instagram" && (
      <div className="h-12 flex items-center px-4 bg-white border-t border-gray-200">
        <div className="flex-1 bg-gray-50 rounded-full px-4 py-2 text-sm text-gray-500 border border-gray-200">Message...</div>
        <div className="ml-3 p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"><Send className="h-4 w-4 text-white" /></div>
      </div>
    )}
  </>
);

export default InputBar; 