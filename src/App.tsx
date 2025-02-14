import "./App.css";
import { NaobeContext } from "./main";
import { useContext, useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("ページがマウントされました");
    return () => {
      console.log("ページがアンマウントされました");
    };
  }, [count]);

  const naobeInfo = useContext(NaobeContext);

  const ref = useRef<HTMLInputElement>(null);
  const handleRef = () => console.log(ref.current?.value);

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
      <hr />

      <div className="mt-50">
        <h1>useEffect</h1>
        <small>
          <ul>
            <li>
              発火のタイミング(依存配列が更新された、ページがマウント、ページがアンマウント)
            </li>
          </ul>
        </small>
      </div>
      <hr />

      <div className="mt-50">
        <h1>useContext</h1>
        <small>
          <ul>
            <li>{naobeInfo.name}</li>
            <li>プロパティのバケツリレーを回避</li>
            <li>コンポーネントツリー全体にデータを渡すための仕組み</li>
            <li>
              アプリケーション全体で共有するデータ（ユーザー情報、テーマ設定など）を管理
            </li>
          </ul>
        </small>
      </div>
      <hr />
      <div className="mt-50">
        <h1>useRef</h1>
        <small>
          <ul>
            <li>DOM 要素に直接アクセスし要素や属性を参照する</li>
            <li>useRef で保持した値は、再レンダリングされても変わらない</li>
          </ul>
        </small>
        <input type="text" ref={ref} />
        <button onClick={handleRef}>追加</button>
      </div>
    </div>
  );
}

export default App;
