import React from "react";

const Todos = [
  {
    id: 1,
    title: "Create a new project",
    description: `
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    `,
    status: "progress",
  },
  {
    id: 2,
    title: "Create a new project",
    description: `
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    `,
    status: "progress",
  },
  {
    id: 3,
    title: "Create a new project",
    description: "Create a new project with React and TailwindCSS",
    status: "done",
  },
  {
    id: 4,
    title: "Create a new project",
    description: `
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog. A quick brown fox jumps over the lazy dog.
    `,
    status: "pending",
  },
  {
    id: 5,
    title: "Create a new project",
    description: "Create a new project with React and TailwindCSS",
    status: "progress",
  },
  {
    id: 6,
    title: "Create a new project",
    description: "Create a new project with React and TailwindCSS",
    status: "done",
  },
];

type STATUS_MAP_ = {
  [key: string]: string;
};

const STATUS_MAP: STATUS_MAP_ = {
  done: "bg-green-500",
  progress: "bg-yellow-500",
  pending: "bg-red-500",
};

export default function Dashboard() {
  return (
    <div className="flex flex-col flex-nowrap w-full h-full">
      <div className="flex flex-col flex-nowrap justify-center w-full h-12 px-4 mb-10">
        <button className="self-end bg-green-600 rounded-sm p-2 w-28 text-white font-bold tracking-wide hover:bg-green-700">New</button>
      </div>
      {/* Todos */}
      <div className="flex flex-col flex-nowrap w-full h-full overflow-y-auto">
        {Todos.map((todo) => (
          <div key={todo.id} className="flex flex-col flex-nowrap justify-start w-full h-min px-4 mb-8 bg-white rounded-md shadow-md">
            <div className="flex flex-row flex-nowrap justify-between w-full h-12 border-b-2">
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
