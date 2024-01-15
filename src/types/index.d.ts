type User = {
  _id?: string;
  name?: string;
  email?: string;
  token?: string;
  isLoggedIn?: boolean;
  status?: string;
};

type Todos = Array<Todo>;

type Todo = {
  _id?: string;
  title?: string;
  description?: string;
  isCompleted?: boolean;
  status?: string;
  createdAt?: date;
  updatedAt?: date;
};

type TodoMeta = {
  totalRecords?: number;
  page?: number;
  limit?: number;
  totalPages?: number;
};

interface TodoFilter {
  [key: string]: any;
  page: number;
  limit: number;
}

type StoreState = {
  user: User | null;
  todos: Todos;
  todoMeta: TodoMeta;
  todoPagination: TodoFilter;
  updateUser: ({ user, isLoggedIn }: { user: User | null; isLoggedIn: Boolean | null }) => void;
  updateTodos: ({ todos, todoMeta }: { todos: Todos; todoMeta?: TodoMeta | undefined }) => void;
  updatePagination: ({ page, limit }: { page: number; limit: number }) => void;
  updateTodoMeta: ({ totalRecords, page, limit, totalPages }: TodoMeta) => void;
};

type STATUS_MAP_ = {
  [key: string]: string;
};
