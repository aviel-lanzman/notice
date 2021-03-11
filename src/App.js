// import logo from './logo.svg';
import "./App.css";
import React from "react";
// import Headers from "./component/Headers";
// import Contener from "./component/contener";
import { useState } from "react";
import "antd/dist/antd.css";
// import { Route, Router, Switch } from "react-router";
// import { Link } from "react-router-dom";
import Title from "./component/title";
import Headers from "./component/Headers";
import Home from "./component/Home/Home";
import Sidebar from "./component/Menu";

const App = () => {
	const [listNote, setListNote] = useState({});
	return (
		<>
			<Title />

			<div
				className="contener"
				style={{ display: "flex", direction: "rtl" }}
			>
				<div
					className="Sidebar"
					style={{
						background: "burlywood",
						display: "flex",
						justifyContent: "center",
						height: "100%",
						width: "260px",
						position: "fixed",
						zIndex: "1",
						right: "0",
						overflowX: "hidden",
					}}
				>
					<Sidebar />
				</div>
			</div>
			<div
				className="home"
				style={{ width: "1040px", margin: "5px auto" }}
			>
				<Home />
			</div>
		</>
	);
};
export default App;
