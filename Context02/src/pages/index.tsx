import type { NextPage } from "next";
import { Dispatch, SetStateAction, useContext, useState } from "react";
import { Todo } from "src/types";
import { TodoContext } from "./_app";

type Props = {
  todos: Todo[];
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Home: NextPage<Props> = () => {
  const { todos, setTodos } = useContext(TodoContext);

  const toggleIsDone = (id: Todo["id"]) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    });
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
