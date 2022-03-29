import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FlashProvider } from "./contexts/flashMessage";

ReactDOM.render(
  <FlashProvider>
    <App />
  </FlashProvider>,
  document.getElementById("root")
);
