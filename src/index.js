import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./layout/Header";
// import Footer from "./layout/Footer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <App />
        {/* <Footer /> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
