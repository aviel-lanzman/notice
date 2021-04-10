import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from "antd";
import Search from "./search";
import IconsTitle from "./iconsTitle";
import MenuButton from "./menuButten";
import MyAvatar from "./avater";
import { IconButton } from "@material-ui/core";

const Title = ({ showSidebar, setShowSidebar }) => {
  return (
    <div
      className="title"
      style={{ background: "blanchedalmond", display: "flex", padding: "20px" }}
    >
      <MyAvatar />
      <IconsTitle />
      <Search />
      <MenuButton
        style={{ background: "blanchedalmond", marginTop: "14px" }}
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </div>
  );
};
export default Title;
