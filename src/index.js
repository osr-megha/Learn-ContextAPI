import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Context from "./Context";


// ReactDOM.render(
//   <React.Fragment>
//   <Router>
//     <Context>
//       <App />
//     </Context>
//     </Router>
//   </React.Fragment>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Context><App /></Context>)