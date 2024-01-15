"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useStore } from "@/store/state";
import { API_ENDPOINT } from "@/utils/api_endpoint";

export default function Profile({ params }: { params: { profileId: string } }) {
  const [profile, setProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const profileId = params?.profileId;

  const getProfile = async () => {
    setLoading(true);
    const response = await fetch(`${API_ENDPOINT.me}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    setProfile(data);
    setLoading(false);
  };

  useEffect(() => {
    if (profileId) {
      getProfile();
    }
  }, [profileId]);

  return (
    <div className="flex flex-col flex-nowrap w-full h-full">
      <div className="flex flex-col flex-nowrap w-full h-full">
        <div className="flex flex-row flex-nowrap justify-between items-center w-full h-12 px-2 mb-10 border-b-2 py-2">
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>
        {/* Name */}
        <div className="flex flex-col flex-nowrap w-full h-full px-2">
          <div className="border-b-2 pb-2">
            <h1 className="text-2xl font-bold mb-2">Name</h1>
            <div className="flex flex-row items-center justify-between">
              <p className="text-lg font-medium h-full">{profile?.name}</p>
              <button className="bg-gray-200 text-gray-600 px-2 h-full">edit</button>
            </div>
          </div>
        </div>
        {/* Email */}
        <div className="flex flex-col flex-nowrap w-full h-full px-2">
          <div className="border-b-2 pb-2">
            <h1 className="text-2xl font-bold mb-2">Email</h1>
            <div className="flex flex-row items-center justify-between">
              <p className="text-lg font-medium h-full">{profile?.email}</p>
            </div>
          </div>
        </div>
        {/* status */}
        <div className="flex flex-col flex-nowrap w-full h-full px-2">
          <div className="border-b-2 pb-2">
            <h1 className="text-2xl font-bold mb-2">Status</h1>
            <div className="flex flex-row items-center justify-between">
              <p className={`text-lg font-medium h-full px-2 rounded-md ${profile?.status === "active" ? "bg-green-100 text-green-900" : "bg-gray-200 text-gray-600"}`}>{profile?.status}</p>
              <button className="bg-gray-200 text-gray-600 px-2 h-full">edit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
