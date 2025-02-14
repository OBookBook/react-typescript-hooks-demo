import { useRef } from "react";

const UseRef = () => {
  const ref = useRef<HTMLInputElement>(null);
  const handleRef = () => console.log(ref.current?.value);

  return (
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
      <hr />
    </div>
  );
};

export default UseRef;
