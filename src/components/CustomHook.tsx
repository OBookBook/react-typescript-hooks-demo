import UseLocalStorage from "./UseLocalStorage";

const CustomHook = () => {
  const [age, setAge] = UseLocalStorage("age", 30);

  return (
    <div className="mt-50">
      <h1>customHook</h1>
      <small>
        <ul>
          <li>Reactのフックを使って再利用可能なロジックを作成するための機能</li>
        </ul>
      </small>
      <p>{age}</p>
      <button onClick={() => setAge(80)}>年齢を80にする</button>
      <hr />
    </div>
  );
};

export default CustomHook;
