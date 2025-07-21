"use client";
import React from 'react';
import FakeChatStepper from '../../components/fakechat/FakeChatStepper';

const FakeChatPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mt-4 mb-4 drop-shadow-sm">Create Viral Fake Chat Videos</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">Design and preview WhatsApp, iMessage, or Instagram conversations as stunning videos. Perfect for memes, storytelling, and viral content.</p>
      <FakeChatStepper />
    </main>
  );
};

export default FakeChatPage;
