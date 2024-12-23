'use client';
import { useState, useEffect } from 'react';
import { MinusIcon, TvIcon, HomeIcon, UserIcon, CogIcon, ClipboardDocumentListIcon, Bars3Icon, ClockIcon  } from '@heroicons/react/24/outline';
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import Link from 'next/link';
import SkillsPopup from './agent-skills/skills-components/skills-popup';
// import Sidebar from "./components/Sidebar";
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
  const [isSidebarOpen, setSidebarOpen] = useState(false); // For mobile menu toggle
  const [isSidebarMinimized, setSidebarMinimized] = useState(false); // For desktop minimized view
  const [isSkillsModalOpen, setSkillsModalOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Update state after the component is mounted on the client
  }, []);

  if (!isClient) {
    return null; // Prevent rendering until after the component is mounted on the client
  }

  // Navigation items data
  const navigationItems = [
    { icon: HomeIcon, label: "Home", href: "/" },
    { icon: ClockIcon, label: "Recent", href: "/recent" },
    { icon: UserIcon, label: "Leads", href: "/leads" },
    { icon: CogIcon, label: 'Settings', href: "/settings"},
  ];

  return (
    <html lang="en" className='h-full'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-full `}
      >
        <div className="flex flex-col h-full">
          <Navbar />
          <div className="flex flex-col h-full">


            <div className="flex flex-grow  h-full">
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
                {navigationItems.map(({ icon: Icon, label, href }, index) => (
                  <Link
                    key={index}
                    href={href}
                    className={`flex text-slate-800 items-center p-4 hover:bg-gray-300 cursor-pointer ${
                      isSidebarMinimized ? "justify-center" : ""
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                    {!isSidebarMinimized && <span className="ml-4">{label}</span>}
                  </Link>
                ))}
                <div
                    className={`flex text-slate-800 items-center p-4 hover:bg-gray-300 cursor-pointer ${
                      isSidebarMinimized ? "justify-center" : ""
                    }`}
                    onClick={() => setSkillsModalOpen(true)}
                  >
                    <ClipboardDocumentListIcon className="w-6 h-6" />
                    {!isSidebarMinimized && <span className="ml-1">Agent Skills</span>}
                </div>
              </div>
              </div>

              <div className="lg:hidden">
                <button
                  onClick={() => setSidebarOpen(!isSidebarOpen)}
                  className="p-4 text-gray-800"
                >
                  {isSidebarOpen ? <TvIcon className="w-6 h-6" /> : <MinusIcon className="w-6 h-6" />}
                </button>
              </div>

              {isSidebarOpen && (
                <div
                  className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-gray-800 text-white z-50 flex flex-col"
                >
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-4 text-right text-gray-400"
                  >
                    <TvIcon className="w-6 h-6" />
                  </button>
                  {navigationItems.map(({ icon: Icon, label }, index) => (
                    <div key={index} className="flex items-center p-4 hover:bg-gray-700 cursor-pointer">
                      <Icon className="w-6 h-6" />
                      <span className="ml-4">{label}</span>
                    </div>
                  ))}
                </div>
              )}

              <main className="flex-1 pl-3 pr-3 pt-2 pt-2 bg-gray-100 overflow-y-auto">
                {children}
              </main>
            </div>
          </div>
        </div>
        {isSkillsModalOpen && (
          <SkillsPopup open={isSkillsModalOpen} setOpen={setSkillsModalOpen} />
        )}
      </body>
    </html>
  );
}
