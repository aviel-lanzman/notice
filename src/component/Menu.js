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
import EditNote from "./EditNote";
import EditLabel from "./EditLabel";
import Edit from "./Edit";
const { SubMenu } = Menu;
const home = "/home";
const reminders = "/reminders";
const archive = "/archive";
const trash = "/trash";

const styleButtonLargSiz = {
  width: "250px",
  height: "50px",
  display: "flex",
  margin: "5px 0px 5px 5px",
  borderRadius: "30px 0 0 30px",
  alignItems: "center",
};
const styleButtonSmolSiz = {
  // width: "150px",
  height: "40px",
  display: "flex",
  margin: "5px 0px 5px 5px",
  padding: "10px",
  borderRadius: "20px",
  alignItems: "center",
};

const Sidebar = ({ showSidebar }) => {
  const [contener, setContener] = useState("");
  const [headers, setHeaders] = useState("הערות");
  const [listButton, setListButton] = useState([
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
  ]);
  const [render, setRender] = useState(false);

  const allButton = listButton.map((button) => (
    <div key={button.text}>
      {/* <div><Edit/></div> */}
      <div>
        {button.text === "עריכת תוית" ? (
          <EditLabel
            setListButton={setListButton}
            listButton={listButton}
            button={button}
            setRender={setRender}
            styleButtonLargSiz={styleButtonLargSiz}
            styleButtonSmolSiz={styleButtonSmolSiz}
            showSidebar={showSidebar}
          />
        ) : (
          <Button
            style={showSidebar ? styleButtonLargSiz : styleButtonSmolSiz}
            onClick={() => {
              console.log(button.text);
              // setHeaders(button.func.header);
              // setContener(button.func.contener);
            }}
          >
            <div style={{ alignSelf: "center", padding: "2px" }}>
              {button.icon}
            </div>
            {showSidebar ? (
              <div style={{ alignSelf: "center", paddingRight: "7px" }}>
                {button.text}
              </div>
            ) : null}
          </Button>
        )}
      </div>
    </div>
  ));
  if (render) {
    setRender(false);
  }
  console.log(render);
  console.log(listButton);
  return (
    <>
      <div className="menu" dir="rtl">
        {allButton}
      </div>
    </>
  );
};
export default Sidebar;
