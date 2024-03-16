import { useNavigate } from "react-router-dom";
import { Layout as AntdLayout, Menu, theme } from "antd";
const { Header, Content, Footer } = AntdLayout;

const items = [
  {
    key: "/contact",
    label: "Contact",
  },
  {
    key: "/cart",
    label: "Cart",
  },
  {
    key: "/profile",
    label: "Profile",
  },
];

const Layout = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <AntdLayout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{ color: "white" }}
          className="logo"
          onClick={() => navigate("/")}
        >
          QR Ninja
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          onClick={(value) => navigate(value.key)}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        {/* <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
        <div
        // style={{
        // background: colorBgContainer,
        // minHeight: 280,
        // padding: 24,
        // borderRadius: borderRadiusLG,
        // }}
        >
          {children}
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Qr Ninja ©{new Date().getFullYear()} Created by Falstelo
      </Footer>
    </AntdLayout>
  );
};

export default Layout;
