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

const styleSmwllShowSaidebar = {
  background: "burlywood",
  display: "flex",
  justifyContent: "center",
  height: "100vh",
  width: "75px",
  position: "sticky",
  zIndex: "10",
  right: "0",
  top: "0",
  overflowX: "hidden",
};
const styleShowSaidebar = {
  background: "burlywood",
  // display: "flex",
  justifyContent: "center",
  height: "100vh",
  width: "260px",
  position: "sticky",
  zIndex: "10",
  right: "0",
  top: "0",
  overflowX: "hidden",
};
const App = () => {
  const [listNote, setListNote] = useState({});
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <Title showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      <div className="contener" style={{ display: "flex", direction: "rtl" }}>
        <div className="contener" style={{ display: "flex", direction: "rtl" }}>
          <div
            className="Sidebar"
            style={showSidebar ? styleShowSaidebar : styleSmwllShowSaidebar}
          >
            <Sidebar
              showSidebar={showSidebar}
              setShowSidebar={setShowSidebar}
            />
          </div>
        </div>
        <div className="home" style={{ width: "1040px", margin: "5px auto" }}>
          <Home />
        </div>
      </div>
    </>
  );
};
export default App;
