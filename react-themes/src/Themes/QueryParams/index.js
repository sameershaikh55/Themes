import React from "react";
import "./Style.css";
import { Switch, Route, useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const QueryParams = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Nav} />
				<Route exact path="/result" component={RoutePage} />
			</Switch>
		</BrowserRouter>
	);
};

const Nav = () => {
	let history = useHistory();

	const routeFunc = () => {
		history.push(
			`/result?name=sameer&profession=developer&education=inter&city=karachi`
		);
	};

	return (
		<div className="text-center mt-4">
			<button
				onClick={() => routeFunc()}
				type="button"
				className="btn btn-dark"
			>
				ROUTE BUTTON
			</button>
		</div>
	);
};

const RoutePage = () => {
	// GETTING URL AS AN OBJECT START
	const location = useLocation();

	let urlData = {};
	location.search
		.substring(1)
		.split("&")
		.map((prev) => {
			let pair = prev.split("=");
			urlData = { ...urlData, [pair[0]]: pair[1] };
		});

	// SECOND METHOD BELOW
	// const string = location.search.substring(1).split("&");

	// var urlData = {};
	// for (var i = 0; i < string.length; i++) {
	// 	var pair = string[i].split("=");
	// 	var ind1 = pair[0];
	// 	var ind2 = pair[1];

	// 	urlData = { ...urlData, [ind1]: ind2 };
	// }
	// =======================

	return (
		<div className="text-center">
			<div>Yes query params has got</div>
			Hurray Look Below
			<div className="mt-5"> {JSON.stringify(urlData)} </div>
		</div>
	);
};
