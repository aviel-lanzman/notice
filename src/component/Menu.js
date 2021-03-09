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
  // styleButton,
  width: "100%",
  height: "auto",
  display: "flex",
};
// [`width: ${"100%"} `];
const MyMenu = ({ SaveKeep }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [contener, setContener] = useState(<Headers save={SaveKeep} />);
  const [headers, setHeaders] = useState("הערות");
  const toggleCollapsed = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };
  console.log(styleButton);
  return (
    <>
      <div class="menu" dir="rtl">
        <div
          onClick={() => {
            console.log("home");
            setHeaders("הערות");
            setContener(<Home />);
          }}
        >
          <div>
            <Button style={styleButton}>
              <div>
                <BulbOutlined />
              </div>
              <div>הערות</div>
            </Button>
          </div>
        </div>
        <div
          onClick={() => {
            console.log("Reminders");
            setHeaders("תזכורות");
            setContener(<Reminders />);
          }}
        >
          <div>
            <Button style={styleButton}>
              <div>
                <BellOutlined />
              </div>
              <div>תזכורות</div>
            </Button>
          </div>
        </div>
        <div
          onClick={() => {
            console.log("home");
            setHeaders("עריכת תוית");
            // setContener(<Reminders />);
          }}
        >
          <div>
            <Button style={styleButton}>
              <div>
                <ContainerOutlined />
              </div>
              <div>עריכת תוית</div>
            </Button>
          </div>
        </div>
        <div
          onClick={() => {
            console.log("Archiv");
            setHeaders("ארכיון");
            setContener(<Archiv />);
          }}
        >
          <div>
            <Button style={styleButton}>
              <div>
                <ContainerOutlined />
              </div>
              <div>ארכיון</div>
            </Button>
          </div>
        </div>
        <div
          onClick={() => {
            console.log("Trash");
            setHeaders("אשפה");
            setContener(<Trash />);
          }}
        >
          <Button style={styleButton}>
            <div>
              <RestOutlined />
            </div>
            אשפה<div></div>
          </Button>
        </div>

        {/* <div style={{ padding: "54px", display: "table-caption" }}>
          {contener}
        </div> */}
      </div>
    </>
  );
};
export default MyMenu;
