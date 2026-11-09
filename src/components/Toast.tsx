import React from 'react';
import { useSite } from '../context/SiteContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useSite();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 bg-[#181822] border border-white/20 text-white text-sm font-bold rounded-xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#FFE600] to-[#FF2E93] shadow-xs shadow-pink-500" />
      <CheckCircle2 className="w-4 h-4 text-[#FFE600] shrink-0" />
      <span>{toastMessage}</span>
    </div>
  );
};
