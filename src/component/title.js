import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from "antd";
import { AppstoreOutlined, EllipsisOutlined } from "@ant-design/icons";
import Serch from "./serch";
import MyMenu from "./Menu";
import IconsTitle from "./iconsTitle";
import MenuButten from "./menuButten";
import { Avatar } from "@material-ui/core";
import MyAvatar from "./avater";

const { Paragraph } = Typography;

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu}>
    <Button
      style={{
        border: "none",
        padding: 0,
      }}
    >
      <EllipsisOutlined
        style={{
          fontSize: 20,
          verticalAlign: "top",
        }}
      />
    </Button>
  </Dropdown>
);

const IconLink = ({ src, text }) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const Title = () => {
  const userAvatar = {};
  return (
    <div
      class="title"
      style={{ background: "blanchedalmond", display: "flex", padding: "20px" }}
    >
      {/* <PageHeader
        className="site-page-header"
        //   dir="rtl"
        // style={{ display: "contents" }}
        // title={[<IconsTitle />]}
        // tags={<Tag color="blue">Running</Tag>}
        subTitle="ttttt"
        avatar={{
          src: userAvatar.src,
        }}
        // extra={[<MenuButten />]}
      > */}
      <MyAvatar />
      <IconsTitle />
      <Serch />
      <MenuButten style={{ background: "blanchedalmond", marginTop: "14px" }} />
      {/* </PageHeader> */}
    </div>
  );
};
export default Title;
