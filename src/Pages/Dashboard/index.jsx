import React from "react";
import { Flex } from "antd";
import { useSelector } from "react-redux";
import Layout from "../../Components/Layout";
import Category from "../../Components/Category";
import Header from "./Component/Header";
import Product from "../../Components/ProductCards";

const Dashboard = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <Layout>
      <Header />
      <Category />
      <Flex gap={20} wrap="wrap">
        {products?.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </Flex>
    </Layout>
  );
};
export default Dashboard;
