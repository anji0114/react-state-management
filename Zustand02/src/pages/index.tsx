import type { NextPage } from "next";
import { Dispatch, SetStateAction } from "react";
import { useStore } from "src/state/todo";
import { Todo } from "src/types";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Home: NextPage<Props> = () => {
  const todos = useStore((state) => state.todos);
  const toggleTodo = useStore((state) => state.toggleTodo);

  return (
    <div>
      <h3>TODO一覧</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label style={{ fontSize: "2rem" }}>
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => toggleTodo(todo.id)}
                style={{ width: "1.5rem", height: "1.5rem" }}
              />
              {todo.text}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
