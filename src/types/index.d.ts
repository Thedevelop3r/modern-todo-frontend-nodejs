type User = {
  name: string;
  email: string;
  token: string;
  isLoggedIn: boolean;
};

type Todo = Array<{
  _id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}>;

type StoreState = {
  user: User;
  todos: Todo;
  updateUser: ({ user, isLoggedIn }: { user: User; isLoggedIn: Boolean }) => void;
  updateTodos: (todos: Todo) => void;
};
