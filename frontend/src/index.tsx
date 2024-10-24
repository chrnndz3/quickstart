import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QuickstartProvider } from "./Context";
import reportWebVitals from "./reportWebVitals";

// calls App.tsx
ReactDOM.render(
  <React.StrictMode>
    <QuickstartProvider>
      {/*  calls App.tsx*/}
      <App />
    </QuickstartProvider>
  </React.StrictMode>,
    //   Have a look at public/index.html. There you'll see <div id="root"></div> which is what document.getElementById('root') is referring to.
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
reportWebVitals();
