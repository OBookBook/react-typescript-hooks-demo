import { useReducer } from "react";

const UseReducer = () => {
  const reducer = (state: number, action: string) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="mt-50">
      <h1>useReducer</h1>
      <small>
        <ul>
          <li>useState の代わりに、より複雑な状態管理を行うためのフック</li>
          <li>
            状態遷移を管理するための関数（reducer）を渡すことで、状態を管理
          </li>
        </ul>
      </small>
      <p>{state}</p>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button>
      <hr />
    </div>
  );
};

export default UseReducer;
