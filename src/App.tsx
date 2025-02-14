import "./App.css";
import SomeChild from "./components/SomeChild";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseState from "./components/useState";
import { useReducer, useState, useMemo, useCallback } from "react";

function App() {
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

  const [count01, setCount01] = useState<number>(0);
  const [count02, setCount02] = useState<number>(0);
  // 重い計算
  // const square = () => {
  //   let i = 0;
  //   while (i < 1000000000) i++;
  //   return count02 * count02;
  // };
  // メモ化 ver
  const square = useMemo(() => {
    let i = 0;
    while (i < 1000000000) i++;
    return count02 * count02;
  }, [count02]);

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
      </div>

      <hr />
      <div className="mt-50">
        <h1>useMemo</h1>
        <small>
          <ul>
            <li>メモ化(値をブラウザのキャッシュに保存)</li>
            <li>
              重い計算を行う依存配列が変更されない限り、再計算(再レンダリング)の影響を避ける
            </li>
          </ul>
        </small>
        <p>カウント1: {count01}</p>
        <p>カウント2: {count02}</p>
        {/* <p>カウント結果 重い計算: {square()}</p> */}
        <p>カウント結果 値をメモ化: {square}</p>
        <button onClick={() => setCount01(count01 + 1)}>+</button>
        <button onClick={() => setCount02(count02 + 1)}>+</button>
      </div>

      <hr />
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
