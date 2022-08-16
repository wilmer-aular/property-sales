import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./codebase/css/codebase.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { NotifyProvider } from "@src/providers/NotifyProvider";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "react-toastify/dist/ReactToastify.css";
const { PUBLIC_URL } = process.env;

ReactDOM.render(
  <NotifyProvider>
    <App basename={PUBLIC_URL} />
  </NotifyProvider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.info))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
