import React from "react";
import Layout from "../../Components/Layout";
import Category from "../../Components/Category";
import Header from "./Component/Header";
import Product from "../../Components/Product";
import { Flex } from "antd";

const Dashboard = () => {
  const products = [
    {
      id: 1,
      name: "cooler",
      img: [
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
      ],
      eco: {
        mrp: 999,
        sp: 799,
      },
    },
    {
      id: 1,
      name: "cooler",
      img: [
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
      ],
      eco: {
        mrp: 999,
        sp: 799,
      },
    },
    {
      id: 1,
      name: "cooler",
      img: [
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
      ],
      eco: {
        mrp: 999,
        sp: 799,
      },
    },
    {
      id: 1,
      name: "cooler",
      img: [
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
      ],
      eco: {
        mrp: 999,
        sp: 799,
      },
    },
    {
      id: 1,
      name: "cooler",
      img: [
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
      ],
      eco: {
        mrp: 999,
        sp: 799,
      },
    },
    {
      id: 1,
      name: "cooler",
      img: [
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
      ],
      eco: {
        mrp: 999,
        sp: 799,
      },
    },
    {
      id: 1,
      name: "cooler",
      img: [
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
      ],
      eco: {
        mrp: 999,
        sp: 799,
      },
    },
    {
      id: 1,
      name: "cooler",
      img: [
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
      ],
      eco: {
        mrp: 999,
        sp: 799,
      },
    },
  ];
  return (
    <Layout>
      dashboard
      <Header />
      <Category />
      <Flex gap={20} wrap="wrap">
        {products.map((product) => (
          <Product key={product.name} {...product} />
        ))}
      </Flex>
    </Layout>
  );
};
export default Dashboard;
