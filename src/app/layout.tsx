"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { useState } from "react";
import { usePathname } from "next/navigation";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Modern Todo App",
//   description: "Manage todos at ease",
// };

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/login", label: "Login" },
  { href: "/learn-more", label: "Learn More" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-between flex-nowrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link href="/">
              <span className={`font-semibold text-xl tracking-tight`}>Todo</span>
            </Link>
          </div>
          {/* navbar */}
          <div className="flex-grow w-[100%] h-full py-4 rounded-md bg-teal-400 flex flex-row items-end">
            <div className="text-sm lg:flex-grow"></div>
            <div>
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`block mt-4 opacity-100 lg:inline-block rounded-md lg:mt-0 text-black px-2 py-1 ${path == href ? "bg-white" : "hover:text-gray-600"} font-extrabold mr-4`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 0h20v20H0V0zm2 5h16v2H2V5zm0 4h16v2H2v-2zm0 4h16v2H2v-2z" fill="currentColor" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto"></div>
        </nav>
        {children}
      </body>
    </html>
  );
}
