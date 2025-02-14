import "./App.css";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseRef from "./components/UseRef";
import UseState from "./components/useState";
import UseReducer from "./components/useReducer";
import UseMemo from "./components/UseMemo";
import UseCallback from "./components/UseCallback";
import CustomHook from "./components/CustomHook";

function App() {
  return (
    <div id="root">
      <UseState />
      <UseEffect />
      <UseContext />
      <UseRef />
      <UseReducer />
      <UseMemo />
      <UseCallback />
      <CustomHook />
    </div>
  );
}

export default App;
