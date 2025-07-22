import React from "react";
import { Rocket, MessageCircle, SplitSquareHorizontal,Star  } from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "Reddit Story Generator",
    description: "Turn Reddit stories into stunning videos with AI narration and visuals.",
    icon: <Rocket className="h-8 w-8 text-blue-500" />,
    href: "/reddit-story",
  },
  {
    name: "FakeChat Videos",
    description: "Create viral fake chat conversations as engaging videos.",
    icon: <MessageCircle className="h-8 w-8 text-blue-500" />,
    href: "/fakechat",
  },
  {
    name: "Split Screen Videos",
    description: "Effortlessly generate split-screen videos for comparisons and reactions.",
    icon: <SplitSquareHorizontal className="h-8 w-8 text-blue-500" />,
    href: "/splitscreen",
  },
];

const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br  text-gray-900 flex flex-col items-center justify-center px-4">
      <section className="pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="h-4 w-4" />
            <span>Trusted by content creators</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6">
            Create Viral Videos
            <span className="block text-blue-600">In Minutes</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform your ideas into engaging videos with AI-powered tools. 
            From Reddit stories to chat conversations, we make viral content creation effortless.
          </p>
        </div>
      </section>
      <section className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <Link
            key={service.name}
            href={service.href}
            className="group bg-white rounded-xl border border-gray-200 p-8 flex flex-col items-center justify-center text-center hover:border-blue-200 transition-colors min-h-[220px]"
          >
            <div className="mb-4 flex items-center justify-center">{service.icon}</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
              {service.name}
            </h2>
            <p className="text-gray-500 text-center text-base mt-1">
              {service.description}
            </p>
          </Link>
        ))}
      </section>
      <footer className="mt-20 text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} SuperViral.
      </footer>
    </main>
  );
};

export default Index;