// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const root = createRoot(document.querySelector("#root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");
render(<App />, root);
