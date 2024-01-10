"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import avatar from "@/assets/avatar/Men.svg";
// import avatar from "@/assets/avatar/Women.svg"; // dynamic gender
import NextImage from "next/image";

export default function Sidebar({ navLinks }: { navLinks: Array<{ href: string; label: string }> }) {
  const path = usePathname();
  const router = {
    name: "John Doe",
    email: "jhon@mail.com",
  };
  return (
    <div className="flex flex-col w-48 h-screen px-4 py-8 bg-slate-50 border-r dark:bg-gray-800 dark:border-gray-600">
      <div className="flex flex-col items-center mt-6 -mx-2">
        <NextImage src={avatar} alt="avatar" width={100} height={100} />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">{router.name}</h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">{router.email}</p>
      </div>
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link
            href="/dashboard"
            className={`flex items-center px-4 py-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500 ${
              path == "/dashboard" ? "bg-gray-200 dark:bg-gray-500" : ""
            }`}
          >
            <span className="mx-4">Dashboard</span>
          </Link>
          <Link
            href="/dashboard/profile"
            className={`flex items-center px-4 py-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500 ${
              path == "/dashboard/profile" ? "bg-gray-200 dark:bg-gray-500" : ""
            }`}
          >
            <span className="mx-4">Profile</span>
          </Link>
          <Link
            href="/dashboard/settings"
            className={`flex items-center px-4 py-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500 ${
              path == "/dashboard/settings" ? "bg-gray-200 dark:bg-gray-500" : ""
            }`}
          >
            <span className="mx-4">Settings</span>
          </Link>
        </nav>
        <div className="flex items-center px-4 -mx-2">
          <button className="flex items-center px-4 py-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-500">
            <span className="mx-4">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
