// import logo from './logo.svg';
import "./App.css";
import React from "react";
// import Headers from "./component/Headers";
// import Contener from "./component/contener";
import { useState } from "react";
import "antd/dist/antd.css";
// import { Route, Router, Switch } from "react-router";
// import { Link } from "react-router-dom";
import MyMenu from "./component/Menu";
import Title from "./component/title";
import Headers from "./component/Headers";
import Home from "./component/Home/Home";

const App = () => {
  const [listNote, setListNote] = useState({});
  return (
    <>
      <Title />

      <div class="contener" style={{ display: "flex", direction: "rtl" }}>
        <div class="my-menu" style={{ background: "burlywood" }}>
          <MyMenu />
        </div>
        <div class="home" style={{ width: "1040px", margin: "5px auto" }}>
          <Home />
        </div>
      </div>
    </>
  );
};
export default App;

//     <Contener
//       saveValueContent={saveValueContent}
//       saveValueTitle={saveValueTitle}
//     />
