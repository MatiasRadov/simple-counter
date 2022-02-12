//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import SimpleCounter from "./component/SimpleCounter.jsx";

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
