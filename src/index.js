import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import * as themes from "./components/design-tags/themes.json"
import { setStorage } from "./components/functions/Localstorage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Index = () => {
  setStorage( themes.default,'all-themes');
  return(
    <App />
  )
}

root.render(
  <BrowserRouter>
      <Index />
  </BrowserRouter>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
