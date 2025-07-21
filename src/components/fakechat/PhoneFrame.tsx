import React from "react";

import ChatArea from "./ChatArea";
import InputBar from "./InputBar";
import StatusBar from "./StatusBar";
import HeaderBar from "./HeaderBar";

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

const PhoneFrame: React.FC<Props> = ({ name, template, messages }) => (
  <div className="bg-black w-[328px] h-[578px] rounded-[32px] p-[4px] shadow-2xl flex items-center justify-center">
    <div className="bg-white rounded-[28px] overflow-hidden flex flex-col" style={{ width: "320px", height: "570px" }}>
      <StatusBar />
      <HeaderBar name={name} template={template} />
      <div className="flex flex-col flex-1 min-h-0">
        <ChatArea template={template} messages={messages} />
        <InputBar template={template} />
      </div>
    </div>
  </div>
);

export default PhoneFrame; 