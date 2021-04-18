import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import PaginationC from "./Themes/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryParams } from "./Themes/QueryParams";

ReactDOM.render(
	<React.StrictMode>
		{/* <PaginationC /> */}
		<QueryParams />
	</React.StrictMode>,
	document.getElementById("root")
);
