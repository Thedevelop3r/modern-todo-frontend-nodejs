"use client";

import Sidebar from "@/components/Dashboard/Sidebar";
import Links from "@/utils/static.json";
import { API_ENDPOINT } from "@/utils/api_endpoint";
import { useStore } from "@/store/state";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { updateUser } = useStore();
  const router = useRouter();

  const getUser = async () => {
    return fetch(API_ENDPOINT.me, {
      method: "GET",
      credentials: "include",
    });
  };

  useEffect(() => {
    getUser()
      .then((response) => {
        console.log("getting user");
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateUser({ user: data, isLoggedIn: true });
      })
      .catch((err) => {
        console.log(err);
        router.push("/login");
      });
  }, []);

  return (
    <div className="flex flex-row flex-nowrap w-full h-full">
      <Sidebar navLinks={Links.navLinks} />
      <div className="flex flex-col flex-nowrap w-full h-full">
        <main className="flex flex-col flex-nowrap w-full h-full p-4">{children}</main>
      </div>
    </div>
  );
}
