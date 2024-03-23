import { Flex, Menu } from "antd";
import Layout from "../../Components/Layout";
import { useNavigate, useParams } from "react-router-dom";
import Account from "./Account";
import Orders from "./Orders";

const ControlPanel = () => {
  const { section } = useParams();
  const navigate = useNavigate();

  function renderSection() {
    const SECTIONS = {
      account: <Account />,
      orders: <Orders />,
    };
    console.log(section);
    if (!section) {
      return <Account />;
    }

    return SECTIONS[section];
  }

  return (
    <Layout>
      <Flex>
        <Menu
          style={{ width: "30%" }}
          items={[
            {
              label: "Account",
              key: "/control-panel/account",
            },
            {
              label: "Orders",
              key: "/control-panel/orders",
            },
          ]}
          onClick={({ key }) => navigate(key)}
        />
        <div style={{ width: "70%" }}>{renderSection()}</div>
      </Flex>
    </Layout>
  );
};

export default ControlPanel;
