import { createStore, create } from "zustand";

const user: User = {
  name: "",
  email: "",
  token: "",
  isLoggedIn: false,
};

const todos: Todo = [{ _id: "", title: "", description: "", status: "", isCompleted: false, createdAt: "", updatedAt: "" }];

const useStore = create<StoreState>((set, get) => ({
  user: { ...user },
  todos: [...todos],
  updateUser: ({ user, isLoggedIn }: { user: User; isLoggedIn: Boolean }) => {
    set((state: StoreState) => {
      const updatedUser = { ...state.user, ...user };
      isLoggedIn ? (updatedUser.isLoggedIn = true) : (updatedUser.isLoggedIn = false);
      console.log(updatedUser);
      return { ...state, user: user ? updatedUser : state.user };
    });
  },
  updateTodos: (todos: Todo) => {
    set((state: StoreState) => {

      return { ...state, todos: todos ? todos : state.todos };
    });
  },
}));

export { useStore };
