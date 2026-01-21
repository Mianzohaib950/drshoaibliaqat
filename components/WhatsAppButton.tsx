
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/971522331797" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 transition-all duration-300 hover:scale-110 active:scale-95 group"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1024px-WhatsApp.svg.png" 
        alt="WhatsApp" 
        className="w-full h-full drop-shadow-xl filter brightness-105"
      />
      <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-semibold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-2xl border border-white/10">
        Chat with Dr. Shoaib
      </span>
    </a>
  );
};

export default WhatsAppButton;
