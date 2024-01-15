type User = {
  _id?: string;
  name?: string;
  email?: string;
  token?: string;
  isLoggedIn?: boolean;
  status?: string;
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
  user: User | null;
  todos: Todos;
  updateUser: ({ user, isLoggedIn }: { user: User | null; isLoggedIn: Boolean | null }) => void;
  updateTodos: (todos: Todos) => void;
};

type STATUS_MAP_ = {
  [key: string]: string;
};
