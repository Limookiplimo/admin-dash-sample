"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useState } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <html lang="en">
      <title>Tenant Dashboard</title>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex flex-1 overflow-hidden">
            <Sidebar />
            <main className={`flex-1 p-6 overflow-auto transition-all duration-300 ${isMinimized ? 'ml-16' : 'ml-64'}`}>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
