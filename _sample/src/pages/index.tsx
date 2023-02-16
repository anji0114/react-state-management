import type { NextPage } from "next";

const TODOS = [
  { id: 1, text: "foo", isDone: false },
  { id: 2, text: "bar", isDone: true },
];

const Home: NextPage = () => {
  return (
    <div>
      <h3>TODO一覧</h3>
      <ul>
        {TODOS.map((todo) => (
          <li key={todo.id}>
            <label style={{ fontSize: "2rem" }}>
              <input
                type="checkbox"
                checked={todo.isDone}
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
