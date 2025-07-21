import React from "react";
import { useFakeChatStore } from "../../store/fakeChatStore";
import MessageEditor from "./MessageEditor";
import PhonePreview from "./PhonePreview";

const FakeChatStep1: React.FC<{ onNext?: () => void }> = ({ onNext }) => {
  const name = useFakeChatStore((s) => s.name);
  const setName = useFakeChatStore((s) => s.setName);
  const template = useFakeChatStore((s) => s.template);
  const setTemplate = useFakeChatStore((s) => s.setTemplate);
  const messages = useFakeChatStore((s) => s.messages);
  const setMessages = useFakeChatStore((s) => s.setMessages);
  const addMessage = useFakeChatStore((s) => s.addMessage);
  const deleteMessage = useFakeChatStore((s) => s.deleteMessage);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Panel - Editor */}
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold  text-gray-800">
              Compose Chat
            </h2>
            <button
              onClick={onNext}
              className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl shadow-md hover:bg-blue-700 transition-all duration-200"
            >
              Next
            </button>
          </div>
          <MessageEditor
            name={name}
            setName={setName}
            template={template}
            setTemplate={setTemplate}
            messages={messages}
            setMessages={setMessages}
            addMessage={() =>
              addMessage({ text: "Empty Message", alignment: "right" })
            }
            deleteMessage={deleteMessage}
          />
        </div>

        {/* Right Panel - Preview */}
        <PhonePreview name={name} template={template} messages={messages} />
      </div>
    </div>
  );
};

export default FakeChatStep1;
