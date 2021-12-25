import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// import { ChakraProvider, CSSReset } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    {/* <ChakraProvider> */}
    {/* <CSSReset /> */}
    <App />
    {/* </ChakraProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
