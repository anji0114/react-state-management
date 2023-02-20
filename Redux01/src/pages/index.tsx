import type { NextPage } from "next";
import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/state";
import { toggleTodo } from "src/state/todos";
import { Todo } from "src/types";

type Props = {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Home: NextPage<Props> = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();

  const toggleIsDone = (id: Todo["id"]) => {
    dispatch(toggleTodo(id));
  };

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
                onChange={() => toggleIsDone(todo.id)}
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
