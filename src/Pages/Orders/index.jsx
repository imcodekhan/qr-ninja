import { Button, Flex, Space } from "antd";
import Layout from "../../Components/Layout";
import { useNavigate } from "react-router-dom";
import OrderCard from "../../Components/ProductCards/OrderCard";

// const DUMMY_ORDER = [
//   {
//     orderId: "cadfhkj",
//     invoiceId: "fadfadf",
//     trackingId: "rfdsafads",
//     orderDate: "15/03/2024",
//     estimatedDeliveryDate: "17/03/2024",
//     products: [
//       {
//         id: "fakjdf",
//         name: "cooler",
//         category: "round neck",
//         size: "oversized",
//         color: "black",
//         price: "1598",
//         quantity: 2,
//         img: "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
//       },
//     ],
//     paymentDetails: {
//       method: "card",
//       cardNumber: "**** 123",
//       cardType: "Visa",
//     },
//     shippingAddress: {
//       addressLine1: "hinjewadi phase 3",
//       addressLine2: "hinjewadi",
//       city: "pimpri chinchwad",
//       postalCode: "411037",
//       phoneNumber: "1231231234",
//     },
//     billingAddress: {
//       addressLine1: "hinjewadi phase 3",
//       addressLine2: "hinjewadi",
//       city: "pimpri chinchwad",
//       postalCode: "411037",
//       phoneNumber: "1231231234",
//     },
//     orderSummary: {
//       subTotal: 1999,
//       discount: 499,
//       deliveryCharge: 59,
//       tax: 221,
//       total: 1789,
//     },
//   },
// ];

const Orders = () => {
  const orders = [];
  const navigate = useNavigate();
  return (
    <Layout>
      {orders?.length ? (
        <Flex gap={20}>
          {orders.map((product) => (
            <OrderCard key={product._id} {...product} />
          ))}
        </Flex>
      ) : (
        <Space
          style={{
            height: "500px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>No order placed yet.</h3>
          <Button onClick={() => navigate("/")}>Continue shopping</Button>
        </Space>
      )}
    </Layout>
  );
};

export default Orders;
