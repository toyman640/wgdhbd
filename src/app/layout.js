'use client';
import { useState } from 'react';
import { MinusIcon, TvIcon, HomeIcon, UserIcon, CogIcon } from '@heroicons/react/24/outline';
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
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

  // Navigation items data
  const navigationItems = [
    { icon: HomeIcon, label: 'Home' },
    { icon: UserIcon, label: 'Profile' },
    { icon: CogIcon, label: 'Settings' },
  ];


  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen overflow-hidden`}
      >
        <div className="">
          <Navbar />
          <div className="flex flex-col h-screen">


            <div className="flex flex-grow mt-16">
              <div
                className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-gray-800 text-white transition-all duration-300 
                  ${isSidebarMinimized ? 'w-[-5%]' : 'w-30%'} hidden lg:flex flex-col`}
              >
                <button
                  onClick={() => setSidebarMinimized(!isSidebarMinimized)}
                  className="p-2 hover:bg-gray-700"
                >
                  {isSidebarMinimized ? '>' : '<'}
                </button>
                <div className="flex flex-col items-center mt-4">
                  {navigationItems.map(({ icon: Icon, label }, index) => (
                    <div
                      key={index}
                      className={`flex items-center p-4 hover:bg-gray-700 cursor-pointer ${
                        isSidebarMinimized ? 'justify-center' : ''
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                      {!isSidebarMinimized && <span className="ml-4">{label}</span>}
                    </div>
                  ))}
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

              <main className="flex-grow w-[70%] p-6">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
