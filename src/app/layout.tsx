import './globals.css';
import { Metadata } from 'next';
import Navbar from './navbar';
import React from "react";

export const metadata: Metadata = {
  title: 'My Marketing App',
  description: 'A small marketing app in Next.js',
};

export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <html lang="en">
    <body>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-6">
          {children}
        </main>
        <footer className="bg-gray-100 py-4 text-center">
          <p className="text-sm text-gray-500">&copy; {year} My Marketing App</p>
        </footer>
      </div>
    </body>
    </html>
  );
}
