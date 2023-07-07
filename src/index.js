import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import "../node_modules/react-bootstrap/dist/react-bootstrap.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  
      <App />
  
  </BrowserRouter>
);
