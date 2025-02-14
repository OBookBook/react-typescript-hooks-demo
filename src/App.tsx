import "./App.css";
import SomeChild from "./components/SomeChild";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseState from "./components/useState";
import { useState, useCallback } from "react";
import UseReducer from "./components/useReducer";
import UseMemo from "./components/UseMemo";

function App() {
  const [counter, setCounter] = useState<number>(0);
  const showCount = useCallback(() => {
    let i = 0;
    while (i < 1000000) i++;
    alert("重い処理です。");
  }, [counter]);

  return (
    <div id="root">
      <UseState />
      <UseEffect />
      <UseContext />
      <UseRef />
      <UseReducer />
      <UseMemo />

      <div className="mt-50">
        <h1>useCallback</h1>
        <small>
          <ul>
            <li>メモ化(関数をブラウザのキャッシュに保存)</li>
            <li>関数をメモ化することで、関数の再生成を避けることができる</li>
          </ul>
        </small>
        <SomeChild showCount={showCount} />
      </div>
    </div>
  );
}

export default App;
