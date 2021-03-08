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

const MyMenu = ({ SaveKeep }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [contener, setContener] = useState(<Headers save={SaveKeep} />);
  const [headers, setHeaders] = useState("הערות");
  const toggleCollapsed = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <>
      <div
        class="menu"
        dir="rtl"
        // style={{ display: "flex", position: "fixed" }}
      >
        <Router>
          <div style={{ width: 256 }}>
            <Button
              type="primary"
              onClick={toggleCollapsed}
              style={{ marginBottom: 16 }}
            >
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
              )}

              <span>{headers}</span>
            </Button>

            <div class="qwe">
              <Menu
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                theme="dark"
                inlineCollapsed={collapsed}
              >
                <Menu.Item
                  key="1"
                  icon={<BulbOutlined />}
                  onClick={() => {
                    console.log("home");
                    setHeaders("הערות");
                    setContener(<Home />);
                  }}
                >
                  הערות
                </Menu.Item>
                <Menu.Item
                  key="2"
                  icon={<BellOutlined />}
                  onClick={() => {
                    console.log("Reminders");
                    setHeaders("תזכורות");
                    setContener(<Reminders />);
                  }}
                >
                  תזכורות
                </Menu.Item>
                <Menu.Item
                  key="3"
                  icon={<ContainerOutlined />}
                  onClick={() => {
                    console.log("home");
                    setHeaders("עריכת תוית");
                    // setContener(<Reminders />);
                  }}
                >
                  עריכת תוית
                </Menu.Item>
                <Menu.Item
                  key="4"
                  icon={<ContainerOutlined />}
                  onClick={() => {
                    console.log("Archiv");
                    setHeaders("ארכיון");
                    setContener(<Archiv />);
                  }}
                >
                  ארכיון
                </Menu.Item>
                <Menu.Item
                  key="5"
                  icon={<RestOutlined />}
                  onClick={() => {
                    console.log("Trash");
                    setHeaders("אשפה");
                    setContener(<Trash />);
                  }}
                >
                  אשפה
                </Menu.Item>
              </Menu>
            </div>
          </div>
          <div
          // style={{ padding: "54px" }}
          >
            {contener}
          </div>
          {/* <div> */}
          {/* <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/users">
                <Reminders />
              </Route>
              <Route path="/"><Label /></Route>
              <Route path="/">
                <Archiv />
              </Route>
              <Route path="/">
                <Trash />
              </Route>
            </Switch> */}
          {/* </div> */}
        </Router>
      </div>
    </>
  );
};
export default MyMenu;
