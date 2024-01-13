import { createStore } from "zustand";

const user: User = {
  name: "",
  email: "",
  token: "",
  isLoggedIn: false,
};

const todos: Todo = [{ _id: "", title: "", description: "", status: "", isCompleted: false, createdAt: "", updatedAt: "" }];

const useStore = createStore<StoreState>((set, get) => ({
  user: { ...user },
  todos: [...todos],
  updateUser: ({ user, isLoggedIn }: { user: User; isLoggedIn: Boolean }) => {
    set((state: StoreState) => {
      const updatedUser = { ...state.user, ...user };
      isLoggedIn ? (updatedUser.isLoggedIn = true) : (updatedUser.isLoggedIn = false);
      return { ...state, user: user ? updatedUser : state.user };
    });
  },
  updateTodos: (todos: Todo) => {
    set((state: StoreState) => {
      return { ...state, todos };
    });
  },
}));

export { useStore };
