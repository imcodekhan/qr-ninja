import { Flex } from "antd";
import Layout from "../../Components/Layout";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <Layout>
      <Flex></Flex>
    </Layout>
  );
};

export default Cart;
