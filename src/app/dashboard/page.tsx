"use client";

import Sidebar from "@/components/Dashboard/Sidebar";

import React from "react";
import Links from "@/utils/static.json";

export default function Dashboard() {
  return (
    <div className='flex flex-row flex-nowrap w-full h-full'>
      <Sidebar navLinks={Links.navLinks} />
    </div>
  );
}
