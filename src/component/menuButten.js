import { Menu } from "@material-ui/core";
import { Button } from "antd";
import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarsOutlined,
} from "@ant-design/icons";

const MenuButten = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [headers, setHeaders] = useState("הערות");
  const toggleCollapsed = () => {
    console.log(collapsed);
    setCollapsed(!collapsed);
  };

  return (
    <>
      {/* <div style={{ width: 256 }}>
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
          ></Menu>
        </div>
      </div> */}
      <Button shape="round">
        <BarsOutlined />
      </Button>
    </>
  );
};
export default MenuButten;
