import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import Serch from "./serch";
import MyMenu from "./Menu";

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
    <div class="title">
      <PageHeader
        //   dir="rtl"
        // style={{ display: "contents" }}
        title="Title"
        className="site-page-header"
        tags={<Tag color="blue">Running</Tag>}
        subTitle={<Serch />}
        extra={[
          <Button key="3">aaaaaaa</Button>,
          <Button key="2">bbbbbbb</Button>,
          ,
        ]}
        avatar={{
          src: userAvatar.src,
        }}
      ></PageHeader>
      <MyMenu />
    </div>
  );
};
export default Title;
