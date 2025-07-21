import { Signal, Wifi, Battery } from "lucide-react";
import React from "react";

const StatusBar: React.FC = () => (
  <div className="h-9 bg-black text-white text-xs flex justify-between items-center px-4 rounded-t-[28px]">
    <span className="font-semibold">9:41</span>
    <div className="flex items-center gap-1">
      <Signal className="h-3 w-3" />
      <Wifi className="h-3 w-3" />
      <Battery className="h-3 w-3" />
    </div>
  </div>
);

export default StatusBar; 