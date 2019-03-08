import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "typeface-roboto";
import whyDidYouRender from "@welldone-software/why-did-you-render";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//whyDidYouRender(React, { include: [/.*/], logOnDifferentValues: true });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
