import { StrictMode } from "react";
import ReactDom from "react-dom";
import "./styles/style.css"
import App from "./App";


//Import BrowserRouter and rename it to Router
import { BrowserRouter as Router} from "react-router-dom";


//Wrap the App component with the Router component to enable the router features.
const root = ReactDom

root.render(
  <StrictMode>
    <Router>
      <App/>
    </Router>
  </StrictMode>,
  document.getElementById("root")
);