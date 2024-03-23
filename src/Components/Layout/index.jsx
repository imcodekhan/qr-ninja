import { useNavigate } from "react-router-dom";
import { Layout as AntdLayout, Flex, theme } from "antd";
import Profile from "../../Pages/ControlPanel";
import { UserOutlined } from "@ant-design/icons";
import CartButton from "../Buttons/CartButton";
const { Header, Content, Footer } = AntdLayout;

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
          backgroundColor: "yellow",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ cursor: "pointer" }}
          className="logo"
          onClick={() => navigate("/")}
        >
          QR Ninja
        </div>
        {/* <Profile /> */}
        <Flex justify="space-evenly" style={{ width: "10%" }}>
          <UserOutlined onClick={() => navigate("/control-panel/account")} />
          <CartButton />
        </Flex>
      </Header>
      <Content>
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
          {/* <Drawer
            closeIcon={<ArrowLeftOutlined />}
            onClose={onClose}
            open={open}
            styles={{
              body: {
                padding: 0,
                height: "100%",
              },
              wrapper: {
                maxWidth: 450,
                width: "100%",
              },
            }}
          > */}
          {/* </Drawer> */}
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
