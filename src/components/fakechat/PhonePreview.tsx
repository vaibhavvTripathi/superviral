import { Smartphone } from "lucide-react";
import React from "react";
import PhoneFrame from "./PhoneFrame";

type Message = {
  text: string;
  alignment: "left" | "right";
};

type Template = "ios" | "whatsapp" | "instagram";

type Props = {
  name: string;
  template: Template;
  messages: Message[];
};

const PhonePreview: React.FC<Props> = ({ name, template, messages }) => (
  <div className="flex justify-center">
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Smartphone className="h-5 w-5 text-gray-600" />
          <h2 className="text-xl font-semibold text-gray-900">Live Preview</h2>
        </div>
      </div>
      <div className="p-6">
        <PhoneFrame name={name} template={template} messages={messages} />
      </div>
    </div>
  </div>
);

export default PhonePreview; 