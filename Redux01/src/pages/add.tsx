import type { NextPage } from "next";
import { ComponentProps } from "react";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "src/state/todos";
import { Todo } from "src/types";

type Props = {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
};

const Add: NextPage = () => {
  const dispatch = useDispatch();

  const handleSubmit: ComponentProps<"form">["onSubmit"] = (event) => {
    event.preventDefault();
    const text = event.currentTarget.text.value;
    dispatch(addTodo(text));
    event.currentTarget.reset();
  };

  return (
    <div>
      <h3>TODO追加</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" name="text" autoComplete="off" required />
        <button>追加</button>
      </form>
    </div>
  );
};

export default Add;
