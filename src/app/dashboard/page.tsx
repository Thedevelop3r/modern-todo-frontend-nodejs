"use client";
import Link from "next/link";
import React, { useLayoutEffect } from "react";
import { useStore } from "@/store/state";
import { API_ENDPOINT } from "@/utils/api_endpoint";

const STATUS_MAP: STATUS_MAP_ = {
  completed: "bg-green-500",
  progress: "bg-yellow-500",
  pending: "bg-red-500",
};

const getAllTodos = async () => {
  return fetch(API_ENDPOINT.todo, {
    method: "GET",
    credentials: "include",
  });
};

export default function Dashboard() {
  const [loading, setLoading] = React.useState(false);
  const { todos, updateTodos, updateUser } = useStore();

  const refreshTodos = async () => {
    setLoading(true);
    const response = await getAllTodos();
    const data = await response.json();
    updateTodos(data?.data);
    setLoading(false);
  };

  const deleteTodo = async (todoId: string | undefined) => {
    setLoading(true);
    const response = await fetch(`${API_ENDPOINT.todo}/${todoId}`, {
      method: "DELETE",
      credentials: "include",
    });
    const data = await response.json();
    updateTodos([...todos.filter((t) => t._id !== todoId)]);
    setLoading(false);
  };

  useLayoutEffect(() => {
    getAllTodos()
      .then((response) => {
        console.log("getting todos");
        return response;
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        updateTodos(data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={`flex flex-col flex-nowrap w-full h-full`}>
      <div className="flex flex-row flex-nowrap justify-between items-center w-full h-12 px-4 mb-10 border-b-2 py-2">
        <h1 className="text-2xl font-bold">Todos</h1>
        <div>
          <button className="mx-2 rounded-md border-green-600 border-2 py-1 px-6 hover:bg-green-600 hover:text-white" onClick={refreshTodos}>
            Refresh
          </button>
          <Link href={"/dashboard/create-todo"} className="mx-2 self-end text-center bg-green-600 rounded-md py-2 px-6 w-36 text-white font-bold tracking-wide hover:bg-green-700">
            New
          </Link>
        </div>
      </div>
      {/* Todos */}
      <div className="flex flex-col flex-nowrap w-full h-full overflow-y-auto">
        {loading == false &&
          todos?.map((todo) => (
            <div key={todo._id} className="flex flex-col flex-nowrap justify-start w-full h-min px-4 mb-8 bg-white rounded-md shadow-lg">
              <div className="flex flex-row flex-nowrap justify-between w-full h-12 border-b-[1px]">
                <div className="flex flex-row items-center flex-nowrap w-3/4">
                  <h1 className="text-xl font-bold hover:text-gray-500 cursor-pointer">{todo.title}</h1>
                  <div className="ml-4 flex flex-row gap-2">
                    <Link className="text-sm text-center font-semibold text-gray-900 rounded-md bg-gray-200 px-2" href={"/dashboard/edit-todo/" + todo._id}>
                      edit
                    </Link>
                    <button
                      onClick={() => {
                        deleteTodo(todo?._id);
                      }}
                      className="text-sm text-center font-semibold text-red-900 rounded-md bg-red-100 px-2"
                    >
                      delete
                    </button>
                  </div>
                </div>
                <div className="flex flex-col flex-nowrap justify-center w-24">
                  <h1 className={`text-sm font-bold text-center text-white p-1 rounded-3xl ${STATUS_MAP[todo?.status ?? ""]}`}>{todo?.status}</h1>
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
