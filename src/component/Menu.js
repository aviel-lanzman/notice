import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  BulbOutlined,
  BellOutlined,
  RestOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Trash from "./Trash/Trash";
import Archiv from "./Archiv/Archiv";
import Reminders from "./Reminders/Reminders";
import Headers from "./Headers";
const { SubMenu } = Menu;
const home = "/home";
const reminders = "/reminders";
const archive = "/archive";
const trash = "/trash";

const styleButton = {
  width: "100%",
  height: "auto",
  display: "flex",
  padding: "20px 0px 20px 20px",
  margin: "5px 0px 5px 5px",
};

const Sidebar = ({ SaveKeep }) => {
  const [contener, setContener] = useState(<Headers save={SaveKeep} />);
  const [headers, setHeaders] = useState("הערות");

  const list = [
    {
      func: { header: "הערות", contener: <Home /> },
      icon: <BulbOutlined />,
      text: "הערות",
    },
    {
      func: { header: "תזכורות", contener: <Reminders /> },
      icon: <BellOutlined />,
      text: "תזכורות",
    },
    {
      func: { header: "עריכת תוית", contener: <Home /> },
      icon: <ContainerOutlined />,
      text: "עריכת תוית",
    },
    {
      func: { header: "ארכיון", contener: <Archiv /> },
      icon: <ContainerOutlined />,
      text: "ארכיון",
    },
    {
      func: { header: "אשפה", contener: <Trash /> },
      icon: <RestOutlined />,
      text: "אשפה",
    },
  ];
  const allButton = list.map((button) => (
    <div
      onClick={() => {
        console.log(button.text);
        setHeaders(button.func.header);
        setContener(button.func.contener);
      }}
    >
      <div>
        <Button style={styleButton}>
          <div>{button.icon}</div>
          <div>{button.text}</div>
        </Button>
      </div>
    </div>
  ));
  return (
    <>
      <div class="menu" dir="rtl">
        {allButton}
      </div>
    </>
  );
};
export default Sidebar;
