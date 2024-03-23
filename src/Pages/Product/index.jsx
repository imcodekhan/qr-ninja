import { useParams } from "react-router-dom";
import Layout from "../../Components/Layout";
import { useState } from "react";
import { Button, Divider, Flex } from "antd";

const product = {
  _id: "hahfj",
  name: "find me now",
  price: 799,
  mrp: 999,
  reviews: {
    points: 344,
    reviewsCount: 400,
    comments: [],
  },
  sizes: ["s", "m", "xl"],
  colors: ["red", "green"],
  images: {
    red: [
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0",
    ],
  },
};

const Product = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  console.log(id);

  return (
    <Layout>
      <Flex>
        <Flex wrap="wrap" flex={0.5}>
          {product.images?.[selectedColor]?.map((img) => (
            <img height={500} width={400} src={img} />
          ))}
        </Flex>
        <Flex vertical>
          <h3>
            {product.name} ₹ {product.mrp}
          </h3>
          <h5>stars</h5> see {product.reviews.comments.length} reviews
          <Divider />
          color : {selectedColor}
          {product.colors.map((color) => (
            <Button
              style={{
                height: 20,
                width: 20,
                borderRadius: "50%",
                backgroundColor: color,
              }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
          Size
          {product.sizes.map((size) => (
            <Button
              onClick={() => setSelectedSize(size)}
              style={{ height: 20, width: 20, borderRadius: 4 }}
            >
              {size}
            </Button>
          ))}
          <Button>Add to cart</Button>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Product;
