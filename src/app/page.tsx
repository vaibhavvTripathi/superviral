import React from "react";
import { Rocket, MessageCircle, SplitSquareHorizontal } from "lucide-react";
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
    <main className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-gray-50 text-gray-900 flex flex-col items-center justify-center px-4">
      <header className="w-full max-w-4xl flex flex-col items-center mb-16 mt-8">
        <div className="flex items-center gap-3">
          <Rocket className="h-10 w-10 text-blue-500 animate-bounce" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent">
            SuperViral
          </h1>
        </div>
      </header>
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
