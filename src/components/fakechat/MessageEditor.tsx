import { User, Palette, Type, Plus, Trash2, AlignLeft, AlignRight } from "lucide-react";
import React from "react";

type Message = {
  text: string;
  alignment: "left" | "right";
};

type Template = "ios" | "whatsapp" | "instagram";

type Props = {
  name: string;
  setName: (name: string) => void;
  template: Template;
  setTemplate: (t: Template) => void;
  messages: Message[];
  setMessages: (m: Message[]) => void;
  addMessage: () => void;
  deleteMessage: (i: number) => void;
};

const getTemplateColor = (templateName: Template) => {
  switch (templateName) {
    case "ios":
      return "from-blue-500 to-blue-600";
    case "whatsapp":
      return "from-green-500 to-green-600";
    case "instagram":
      return "from-purple-500 via-pink-500 to-orange-500";
  }
};

const MessageEditor: React.FC<Props> = ({
  name,
  setName,
  template,
  setTemplate,
  messages,
  setMessages,
  addMessage,
  deleteMessage,
}) => (
  <div className="space-y-6">
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Type className="h-5 w-5 text-gray-600" />
          <h2 className="text-xl font-semibold text-gray-900">Message Editor</h2>
        </div>
      </div>
      <div className="p-6 space-y-6">
        {/* Contact Name */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <User className="h-4 w-4" />
            Contact Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter contact name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50 hover:bg-white"
          />
        </div>
        {/* Template Selection */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
            <Palette className="h-4 w-4" />
            Chat Template
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(["ios", "whatsapp", "instagram"] as Template[]).map((tmpl) => (
              <button
                key={tmpl}
                onClick={() => setTemplate(tmpl)}
                className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                  template === tmpl
                    ? `border-transparent bg-gradient-to-r ${getTemplateColor(tmpl)} text-white shadow-md`
                    : "border-gray-200 bg-white hover:border-gray-300 text-gray-700"
                }`}
              >
                <div className="text-sm font-medium capitalize">{tmpl}</div>
              </button>
            ))}
          </div>
        </div>
        {/* Messages */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">Messages</h3>
            <button
              onClick={addMessage}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Plus className="h-4 w-4" />
              Add Message
            </button>
          </div>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => deleteMessage(index)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors duration-200"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2">
                      <select
                        value={msg.alignment}
                        onChange={(e) => {
                          const updated = [...messages];
                          updated[index].alignment = e.target.value as "left" | "right";
                          setMessages(updated);
                        }}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                      >
                        <option value="left">Left</option>
                        <option value="right">Right</option>
                      </select>
                      {msg.alignment === "left" ? (
                        <AlignLeft className="h-4 w-4 text-gray-400" />
                      ) : (
                        <AlignRight className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                    <textarea
                      value={msg.text}
                      onChange={(e) => {
                        const updated = [...messages];
                        updated[index].text = e.target.value;
                        setMessages(updated);
                      }}
                      placeholder="Type your message..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white"
                      rows={2}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MessageEditor; 