import { useEffect } from "react";

const UseEffect = () => {
  useEffect(() => {
    console.log("ページがマウントされました");
    return () => {
      console.log("ページがアンマウントされました");
    };
  }, []);
  return (
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
  );
};

export default UseEffect;
