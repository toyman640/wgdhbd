'use client';
import { useState, useEffect } from 'react';
import { HomeIcon, UserIcon, CogIcon, ClipboardDocumentListIcon, ClockIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Link from 'next/link';
import SkillsPopup from './agent-skills/skills-components/skills-popup';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DashboardLayout({ children }) {
  const [isSidebarMinimized, setSidebarMinimized] = useState(false);
  const [isSkillsModalOpen, setSkillsModalOpen] = useState(false);

  // Navigation items data
  const navigationItems = [
    { icon: HomeIcon, label: "Home", href: "/" },
    { icon: ClockIcon, label: "Recent", href: "/recent" },
    { icon: UserIcon, label: "Leads", href: "/leads" },
    { icon: CogIcon, label: 'Settings', href: "/settings" },
    { icon: ClipboardDocumentListIcon, label: "Agent Skills", href: "#", onClick: () => setSkillsModalOpen(true) },
  ];

  return (
    <html lang="en" className="h-full">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <div className="flex flex-col h-full">
          <Navbar />

          <div className="flex flex-grow h-full">
            {/* Vertical Sidebar for Larger Screens */}
            <div
              className={`bg-gray-200 text-white transition-all duration-300 ${
                isSidebarMinimized ? 'w-16' : 'w-40'
              } hidden lg:flex flex-col`}
            >
              <button
                onClick={() => setSidebarMinimized(!isSidebarMinimized)}
                className="flex hover:bg-gray-300 justify-center mt-2"
              >
                <Bars3Icon
                  className={`h-6 w-6 text-slate-500 transform transition-transform ${
                    isSidebarMinimized ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div className="flex flex-col items-center mt-4">
                {navigationItems.map(({ icon: Icon, label, href, onClick }, index) => (
                  <Link
                    key={index}
                    href={href}
                    onClick={onClick}
                    className={`flex text-slate-800 items-center p-4 hover:bg-gray-300 cursor-pointer ${
                      isSidebarMinimized ? "justify-center" : ""
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    {!isSidebarMinimized && <span className="ml-4">{label}</span>}
                  </Link>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 pl-3 pr-3 pb-5 mb-5 pt-2 bg-gray-100 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-300">
              {children}
            </main>
          </div>

          {/* Horizontal Navigation for Smaller Screens */}
          <div className="fixed bottom-0 left-0 w-full bg-gray-200 flex lg:hidden justify-around p-2 border-t border-gray-300">
            {navigationItems.map(({ icon: Icon, label, href, onClick }, index) => (
              <Link
                key={index}
                href={href}
                onClick={onClick}
                className="flex flex-col items-center text-slate-800 hover:text-blue-600"
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs">{label}</span>
              </Link>
            ))}
          </div>

          {isSkillsModalOpen && (
            <SkillsPopup open={isSkillsModalOpen} setOpen={setSkillsModalOpen} />
          )}
        </div>
      </body>
    </html>
  );
}
