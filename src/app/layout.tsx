"use client";
import "../../styles/global.css";
import React, { useState } from "react";
import Link from "next/link";
import { Rocket, Menu, X } from "lucide-react";
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Rocket className="h-6 w-6 text-blue-500 group-hover:text-blue-700 transition-colors" />
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-500 transition-colors select-none">
              SuperViral
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm font-medium">
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

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={
                      isActive
                        ? "block px-3 py-2 text-blue-600 font-medium border-l-4 border-blue-600 bg-blue-50"
                        : "block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
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
