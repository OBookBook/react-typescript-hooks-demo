import { useMemo, useState } from "react";

const UseMemo = () => {
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

  return (
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
      <hr />
    </div>
  );
};

export default UseMemo;
