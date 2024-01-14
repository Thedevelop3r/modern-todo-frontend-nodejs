// nextjs edit-todo [todoId].tsx
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useStore } from "@/store/state";
import { API_ENDPOINT } from "@/utils/api_endpoint";

function capitalizeEachWord(str: string) {
  return str.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
}

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function EditTodo({ params }: { params: { todoId: string } }) {
  const [todo, setTodo] = useState<Todo | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const todoId = params?.todoId;
  const { updateTodos, todos } = useStore();

  const getTodo = async () => {
    setLoading(true);
    const response = await fetch(`${API_ENDPOINT.todo}/${todoId}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    setTodo(data);
    setLoading(false);
  };

  const updateTodo = async () => {
    setLoading(true);
    const response = await fetch(`${API_ENDPOINT.todo}/${todoId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    const data = await response.json();
    updateTodos([...todos.filter((t) => t._id !== todoId), data]);
    setLoading(false);
    router.push("/dashboard");
  };

  useEffect(() => {
    if (todoId) {
      getTodo();
    }
  }, [todoId]);

  return (
    <div className="flex flex-col flex-nowrap w-full h-full">
      <div className="flex flex-col flex-nowrap w-full h-full">
        <div className="flex flex-row flex-nowrap justify-between items-center w-full h-12 px-4 mb-10 border-b-2 py-2">
          <h1 className="text-2xl font-bold">Edit Todo</h1>
          <div>
            <button className="mx-2 rounded-md border-green-600 border-2 py-1 px-6 hover:bg-green-600 hover:text-white" onClick={getTodo}>
              Refresh
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full h-full gap-2">
          <div className="py-2 px-2 bg-slate-200 rounded-md text-center font-bold text-sm tracking-wider h-full">
            <select
              className="text-center py-2 h-10 font-bold w-full text-lg tracking-wider border-none outline-none focus:border-none focus:outline-none"
              value={todo?.status}
              onChange={(e) => {
                setTodo({
                  ...todo,
                  status: e.target.value,
                });
              }}
            >
              <option value="pending">Pending</option>
              <option value="progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="py-2 px-2 bg-slate-200 rounded-md text-center font-bold text-2xl tracking-wider">
            <textarea
              className="text-center py-2 h-16 font-bold w-full text-4xl tracking-wider border-none outline-none focus:border-none focus:outline-none"
              value={todo?.title}
              placeholder="Title"
              onChange={(e) => {
                setTodo({
                  ...todo,
                  title: capitalizeEachWord(e.target.value),
                });
              }}
              minLength={1}
              maxLength={40}
            />
          </div>

          <div className="py-2 px-2 bg-slate-200 rounded-md text-center font-bold text-2xl tracking-wider h-full">
            <textarea
              className="text-left font-semibold py-2 px-2 tracking-wider text-normal h-dvh w-full border-none outline-none focus:border-none focus:outline-none"
              value={todo?.description}
              placeholder="Description"
              onChange={(e) => {
                setTodo({
                  ...todo,
                  description: e.target.value,
                });
              }}
              minLength={1}
              maxLength={1000}
            />
          </div>

          {/* sticky save button on top right */}
          <div className="flex items-center justify-between sticky bottom-0 right-0">
            <button className="mx-2 rounded-md border-green-600 border-2 py-1 px-6 hover:bg-green-600 hover:text-white" onClick={updateTodo}>
              Update
            </button>
            <div className="ml-auto pr-4">
              <div className="">Title size: {todo?.title?.length}/40</div>
              <div className="">Description size: {todo?.description?.length}/1000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
