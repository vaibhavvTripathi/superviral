import React from "react";
import { Rocket, MessageCircle, SplitSquareHorizontal, Star, ArrowRight, Play } from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "Reddit Story Generator",
    description: "Turn Reddit stories into stunning videos with AI narration and visuals.",
    icon: <Rocket className="h-8 w-8 text-blue-500" />,
    href: "/reddit-story",
    features: ["AI Voice Narration", "Auto-generated visuals", "Multiple templates"]
  },
  {
    name: "FakeChat Videos",
    description: "Create viral fake chat conversations as engaging videos.",
    icon: <MessageCircle className="h-8 w-8 text-blue-500" />,
    href: "/fakechat",
    features: ["Realistic chat UI", "Custom avatars", "Animated typing"]
  },
  {
    name: "Split Screen Videos",
    description: "Effortlessly generate split-screen videos for comparisons and reactions.",
    icon: <SplitSquareHorizontal className="h-8 w-8 text-blue-500" />,
    href: "/splitscreen",
    features: ["Side-by-side layouts", "Reaction templates", "Easy editing"]
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in">
              <Star className="h-4 w-4" />
              <span>Trusted by 10,000+ content creators</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
              Create Viral Videos
              <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                In Minutes
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your ideas into engaging videos with AI-powered tools. 
              From Reddit stories to chat conversations, we make viral content creation effortless.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/reddit-story"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Play className="h-5 w-5" />
                Start Creating
              </Link>
              <button className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                <span>Watch Demo</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Videos Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50M+</div>
                <div className="text-sm text-gray-600">Views Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Creation Tool
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pick the perfect tool for your content type and start creating viral videos instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group bg-white rounded-2xl border border-gray-200 p-6 lg:p-8 flex flex-col hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6 flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm lg:text-base mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    Get Started
                  </span>
                  <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-blue-500" />
              <span className="font-bold text-gray-900">SuperViral</span>
            </div>
            <div className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} SuperViral. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;