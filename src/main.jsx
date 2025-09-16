import { createRoot } from "react-dom/client";
import "./index.css";
import Rout from "./router/Router.jsx";
import store from "../src/store/Store.jsx"
import { Provider } from "react-redux";



createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Rout />
  </Provider>
);
