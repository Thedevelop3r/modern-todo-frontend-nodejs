type User = {
  name: string;
  email: string;
  token: string;
  isLoggedIn: boolean;
};

type Todos = Array<{
  _id?: string;
  title?: string;
  description?: string;
  isCompleted?: boolean;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}>;

type Todo = {
  _id?: string;
  title?: string;
  description?: string;
  isCompleted?: boolean;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
};

type StoreState = {
  user: User;
  todos: Todos;
  updateUser: ({ user, isLoggedIn }: { user: User; isLoggedIn: Boolean }) => void;
  updateTodos: (todos: Todos) => void;
};

type STATUS_MAP_ = {
  [key: string]: string;
};
