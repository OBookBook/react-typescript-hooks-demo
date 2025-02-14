import { useState, useCallback } from "react";
import SomeChild from "./SomeChild";

const UseCallback = () => {
  const [counter, setCounter] = useState<number>(0);
  const showCount = useCallback(() => {
    let i = 0;
    while (i < 1000000) i++;
    alert("重い処理です。");
  }, [counter]);
  return (
    <div className="mt-50">
      <h1>useCallback</h1>
      <small>
        <ul>
          <li>メモ化(関数をブラウザのキャッシュに保存)</li>
          <li>関数をメモ化することで、関数の再生成を避けることができる</li>
        </ul>
      </small>
      <SomeChild showCount={showCount} />
      <hr />
    </div>
  );
};

export default UseCallback;
