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
  status: string;
  createdAt: string;
  updatedAt: string;
}>;

type StoreState = {
  user: User;
  todos: Todo;
  updateUser: ({ user, isLoggedIn }: { user: User; isLoggedIn: Boolean }) => void;
  updateTodos: (todos: Todo) => void;
};

type STATUS_MAP_ = {
  [key: string]: string;
};

