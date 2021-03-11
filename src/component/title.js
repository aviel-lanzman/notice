import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from "antd";
import Serch from "./serch";
import IconsTitle from "./iconsTitle";
import MenuButten from "./menuButten";
import MyAvatar from "./avater";
import { IconButton } from "@material-ui/core";

const Title = () => {
  return (
    <div
      className="title"
      style={{ background: "blanchedalmond", display: "flex", padding: "20px" }}
    >
      <MyAvatar />
      <IconsTitle />
      <Serch />
      <MenuButten style={{ background: "blanchedalmond", marginTop: "14px" }} />
    </div>
  );
};
export default Title;
