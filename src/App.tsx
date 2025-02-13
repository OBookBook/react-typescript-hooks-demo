import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <div id="root">
      <h1>useState</h1>
      <small>
        <ul>
          <li>setCountが呼ばれるたびに再レンダリングが発生します</li>
          <li>
            親コンポーネントが再レンダリングすると、子コンポーネントも再レンダリングされます。
          </li>
        </ul>
      </small>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default App;
