import { Menu } from "@material-ui/core";
import { Button } from "antd";
import React, { useState } from "react";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BarsOutlined,
} from "@ant-design/icons";

const MenuButten = () => {
  return (
    <>
      <Button shape="round">
        <BarsOutlined />
      </Button>
    </>
  );
};
export default MenuButten;
