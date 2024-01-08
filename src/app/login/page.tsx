"use client";
import Link from 'next/link';
import React, { FormEventHandler, useState } from "react";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // const router = useRouter();

  const validPassword = (password: string) => {
    return password.length >= 8 && password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // const res = await fetch("/api/auth", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ email, password }),
    // }); // const json = await res.json();

    setIsSubmitting(false); // if (!res.ok) return setError(json.message);
    console.log("login success");
    // router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen mt-20">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email Address"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="******************"
              required
              minLength={8}
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            />
            {/* display allowed pattren, turn green when its matches */}
            {
              <div className={`text-xs italic ${(password.length === 0 || validPassword(password)) ? "text-gray-500" : "text-red-600"}`}>
                Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.
              </div>
            }
          </div>
          <div className="flex items-center justify-between">
            <button disabled={isSubmitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              {isSubmitting ? "Loading..." : "Sign In"}
            </button>
            <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/forgot-password">
              Forgot Password?
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">&copy;2020 Acme Corp. All rights reserved.</p>
      </div>
    </div>
  );
}
