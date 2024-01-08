export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-100">
      {/* card with modern todo app into */}
      <div className="bg-white shadow-lg rounded-lg min-w-1/3 w-[900px] max-w-[90%] px-4 py-10">
        <h1 className="text-6xl font-bold text-gray-700 mt-4 mb-16">Modern Todo App</h1>
        <p className="text-3xl text-blue-500 font-semibold">Manage Your personal todos with ease, easily share them across contacts.</p>
        <p className="text-2xl text-slate-600 font-semibold mt-4 mb-24">Unique todos with line items, costs analysis and many more features.</p>
        <div className="mt-4">
          <a href="#" className="text-white hover:text-indigo-600 font-bold bg-indigo-500 p-4 rounded-md">
            Get Started
          </a>
        </div>
      </div>
    </main>
  );
}
