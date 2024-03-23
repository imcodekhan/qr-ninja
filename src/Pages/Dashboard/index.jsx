import React from "react";
import { Flex } from "antd";
import { useSelector } from "react-redux";
import Layout from "../../Components/Layout";
import Category from "../../Components/Category";
import Header from "./Component/Header";
import ProductCard from '../../Components/Cards/ProductCard'

const product = {
  name: "some tshirt",
  category: "oversized",
  size: ["m", "s", "l"],
  stock: 100,
  colors: ["red", "green"],
  priceDetails: {
    mrp: 999,
    sp: 799,
  },
  images: {
    red: ["image1, image2"],
    green: ["image1, image2"],
  },
};

const Dashboard = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <Layout>
      <Header />
      <Category />
      <Flex id="top-picks" gap={20} wrap="wrap">
        {products?.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </Flex>
    </Layout>
  );
};
export default Dashboard;
