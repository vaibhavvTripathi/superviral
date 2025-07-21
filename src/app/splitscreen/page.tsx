"use client";
import React from "react";
import { SplitScreenStepper } from "../../components/splitscreen/SplitScreenStepper";

export default function SplitScreenPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mt-4 mb-4 drop-shadow-sm">Split Screen Video Generator</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">Compare, react, and create side-by-side videos for TikTok, Instagram, YouTube, and more. Perfect for reactions, duets, and comparisons.</p>
      <SplitScreenStepper />
    </main>
  );
} 