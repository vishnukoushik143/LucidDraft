// import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserProvider } from "./context/UserContext";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(
  // <StrictMode>
  <UserProvider>
    <App />
  </UserProvider>,
  // </StrictMode>
);
