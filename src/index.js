import React from "react";
import ReactDOM from "react-dom/client";
//import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import "./index.styled.js";
import "modern-normalize/modern-normalize.css";
import App from "./components/App";
import { /* persistor, */ store } from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./index.styled.js";
import "./stylesheet/vars.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*  <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
      {/* </PersistGate>*/}
    </Provider>
  </React.StrictMode>
);
