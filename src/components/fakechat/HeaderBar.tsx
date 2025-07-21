import { User, ArrowLeft, Phone, Info } from "lucide-react";
import React from "react";

type Template = "ios" | "whatsapp" | "instagram";

type Props = {
  name: string;
  template: Template;
};

const HeaderBar: React.FC<Props> = ({ name, template }) => (
  <>
    {template === "ios" && (
      <div className="h-16 flex items-center px-4 bg-gray-50 border-b border-gray-200">
        <ArrowLeft className="h-6 w-6 mr-3 text-blue-500" />
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 mr-3 flex items-center justify-center">
          <User className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-900 text-lg">{name}</div>
        </div>
        <div className="flex items-center gap-6">
          <Phone className="h-6 w-6 text-blue-500" />
          <Info className="h-6 w-6 text-blue-500" />
        </div>
      </div>
    )}
    {template === "whatsapp" && (
      <div className="h-16 flex items-center px-4 bg-[#075E54]">
        <ArrowLeft className="h-6 w-6 mr-3 text-white" />
        <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 flex items-center justify-center">
          <User className="h-5 w-5 text-gray-600" />
        </div>
        <div className="flex-1">
          <div className="font-medium text-white text-lg">{name}</div>
          <div className="text-xs text-gray-200">online</div>
        </div>
        <div className="flex items-center gap-6">
          <Phone className="h-6 w-6 text-white" />
          <div className="flex items-center gap-1">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    )}
    {template === "instagram" && (
      <div className="h-16 flex items-center px-4 bg-white border-b border-gray-200">
        <ArrowLeft className="h-6 w-6 mr-3 text-gray-900" />
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 mr-3 flex items-center justify-center">
          <User className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1">
          <div className="font-semibold text-gray-900 text-lg">{name}</div>
          <div className="text-xs text-green-500 flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Active now
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Phone className="h-6 w-6 text-gray-900" />
          <Info className="h-6 w-6 text-gray-900" />
        </div>
      </div>
    )}
  </>
);

export default HeaderBar; 