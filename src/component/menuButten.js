import { Menu } from "@material-ui/core";
import { Button } from "antd";
import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarsOutlined,
} from "@ant-design/icons";

const MenuButton = ({ setShowSidebar, showSidebar }) => {
  console.log(showSidebar);
  return (
    <>
      <Button shape="round" onClick={() => setShowSidebar(!showSidebar)}>
        <BarsOutlined />
      </Button>
    </>
  );
};
export default MenuButton;
