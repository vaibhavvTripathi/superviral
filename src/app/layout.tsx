"use client";
import "../../styles/global.css";
import React from "react";
import Link from "next/link";
import { Rocket } from "lucide-react";
import { usePathname } from "next/navigation";
import { QueryProvider } from "../providers/QueryProvider";



const navLinks = [
  { href: "/", label: "Home" },
  { href: "/reddit-story", label: "Reddit Story" },
  { href: "/fakechat", label: "FakeChat" },
  { href: "/splitscreen", label: "Split Screen" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
      <Link href="/" className="flex items-center gap-2 group">
        <Rocket className="h-6 w-6 text-blue-500 group-hover:text-blue-700 transition-colors" />
        <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-500 transition-colors select-none">
          SuperViral
        </span>
      </Link>
      <div className="flex gap-6 text-sm font-medium">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={
                isActive
                  ? "text-blue-600 border-b-2 border-blue-600 pb-1 transition-colors"
                  : "text-gray-700 hover:text-blue-600 transition-colors"
              }
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background min-h-screen">
        <Navbar />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
