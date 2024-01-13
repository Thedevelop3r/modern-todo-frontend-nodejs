"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useStore } from "@/store/state";

const STATUS_MAP: STATUS_MAP_ = {
  done: "bg-green-500",
  progress: "bg-yellow-500",
  pending: "bg-red-500",
};

const getAllTodos = async () => {
  return fetch("http://localhost:4000/api/todo", {
    method: "GET",
    credentials: "include",
  });
};

export default function Dashboard() {
  const todos = useStore.getState().todos;

  useEffect(() => {
    console.log("Dashboard mounted");
    getAllTodos()
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        useStore.getState().updateTodos(data);
      });
    return () => {
      console.log("Dashboard unmounted");
    };
  }, []);

  return (
    <div className={`flex flex-col flex-nowrap w-full h-full`}>
      <div className="flex flex-row flex-nowrap justify-between items-center w-full h-12 px-4 mb-10 border-b-2 py-2">
        <h1 className="text-2xl font-bold">Todos</h1>
        <Link href={"/dashboard/create-todo"} className="self-end text-center bg-green-600 rounded-sm p-2 w-28 text-white font-bold tracking-wide hover:bg-green-700">
          New
        </Link>
      </div>
      {/* Todos */}
      <div className="flex flex-col flex-nowrap w-full h-full overflow-y-auto">
        {todos.map((todo) => (
          <div key={todo._id} className="flex flex-col flex-nowrap justify-start w-full h-min px-4 mb-8 bg-white rounded-md shadow-lg">
            <div className="flex flex-row flex-nowrap justify-between w-full h-12 border-b-[1px]">
              <div className="flex flex-col flex-nowrap w-3/4">
                <h1 className="text-xl font-bold hover:text-gray-500 cursor-pointer">{todo.title}</h1>
              </div>
              <div className="flex flex-col flex-nowrap justify-center w-24">
                <h1 className={`text-sm font-bold text-center text-white p-1 rounded-3xl ${STATUS_MAP[todo.status]}`}>{todo.status}</h1>
              </div>
            </div>
            <div className="flex flex-row flex-nowrap w-full h-16 mt-2">
              <div className="flex flex-col flex-nowrap justify-center w-full">
                <p className="text-sm font-normal text-wrap whitespace-wrap line-clamp-6">{todo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
