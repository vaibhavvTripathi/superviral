"use client";
import { RedditStoryForm } from "../../components/redditstory/RedditStoryForm";

export default function RedditStoryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mt-4 mb-4 drop-shadow-sm">Reddit Story Video Maker</h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-2xl">Turn Reddit posts into engaging narrated videos with AI voiceover and dynamic visuals. Perfect for storytelling and content creation.</p>
      <RedditStoryForm />
    </main>
  );
} 