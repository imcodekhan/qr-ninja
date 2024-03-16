import { Button, Flex, Space } from "antd";
import Layout from "../../Components/Layout";
import { useSelector } from "react-redux";
import Product from "../../Components/Product";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { products } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <Layout>
      {products.length ? (
        <>
          <div style={{ display: "flex", justifyContent: "end", margin: 20 }}>
            <Button onClick={() => navigate("/checkout")}>Checkout</Button>
          </div>
          <Flex gap={20}>
            {products.map((product) => (
              <Product {...product} />
            ))}
          </Flex>
        </>
      ) : (
        <Space
          style={{
            height: "500px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>Cart is empty</h3>
          <Button onClick={() => navigate("/")}>Continue shopping</Button>
        </Space>
      )}
    </Layout>
  );
};

export default Cart;
