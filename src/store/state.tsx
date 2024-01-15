import { create } from "zustand";

const user: User = {
  name: "",
  email: "",
  token: "",
  isLoggedIn: false,
};

const todos: Todos = [];

const useStore = create<StoreState>((set, get) => ({
  user: { ...user },
  todos: [...todos],
  updateUser: ({ user, isLoggedIn }: { user: User | null; isLoggedIn: Boolean | null }) => {
    set((state: StoreState) => {
      let updatedUser = { ...state.user };
      if (user) {
        updatedUser = { ...updatedUser, ...user };
        isLoggedIn ? (updatedUser.isLoggedIn = true) : (updatedUser.isLoggedIn = false);
      }
      console.log(updatedUser);
      return { ...state, user: updatedUser };
    });
  },
  updateTodos: (todos: Todos) => {
    set((state: StoreState) => {
      return { ...state, todos: todos ? todos : state.todos };
    });
  },
}));

export { useStore };
