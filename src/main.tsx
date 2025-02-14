import "./index.css";
import App from "./App.tsx";
import { createRoot } from "react-dom/client";
import { createContext, StrictMode } from "react";

const naobeInfo = {
  name: "Next.js",
};

const NaobeContext = createContext(naobeInfo);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NaobeContext.Provider value={naobeInfo}>
      <App />
    </NaobeContext.Provider>
  </StrictMode>
);

export { NaobeContext };
