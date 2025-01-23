'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const LiveChatButton = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 hidden md:flex items-center">
      {showMessage && (
        <div className="relative mr-4 rounded-full bg-[#f5f5f5] px-4 py-2 text-[#525660]">
          <p className="text-sm">Size nasıl yardımcı olabilirim?</p>
          <button
            onClick={() => setShowMessage(false)}
            className="absolute -right-2 -top-2 rounded-full bg-white p-1 text-[#525660] hover:bg-gray-50"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      <button className="rounded-full bg-[#008cff] p-4 text-white hover:bg-[#008cff]/90">
        <MessageCircle className="h-6 w-6" strokeWidth={3} />
      </button>
    </div>
  );
};

export default LiveChatButton;