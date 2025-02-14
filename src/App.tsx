import "./App.css";
import { NaobeContext } from "./main";
import { useContext, useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("ページがマウントされました");
    return () => {
      console.log("ページがアンマウントされました");
    };
  }, [count]);

  const naobeInfo = useContext(NaobeContext);

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
    </div>
  );
}

export default App;
