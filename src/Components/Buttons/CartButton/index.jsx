import { Anchor, Button, Drawer, Flex, Space } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ArrowLeftOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ProductCard from "../../Cards/ProductCard";

const CartButton = () => {
  const { products } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Drawer
        closeIcon={<ArrowLeftOutlined style={{ color: "black" }} />}
        open={open}
        onClose={() => setOpen(false)}
        styles={{
          body: {
            padding: 0,
            height: "100%",
          },
          wrapper: {
            maxWidth: 450,
            width: "100%",
          },
          header: {
            backgroundColor: "yellow",
          },
        }}
      >
        {products.length ? (
          <>
            <div style={{ display: "flex", justifyContent: "end", margin: 20 }}>
              <Button
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Checkout
              </Button>
            </div>
            <Flex gap={20}>
              {products.map((product) => (
                <ProductCard key={product._id} {...product} />
              ))}
            </Flex>
          </>
        ) : (
          <Flex
            vertical
            style={{ fontSize: 24, fontWeight: "lighter", height: "100%" }}
          >
            <div style={{ padding: 20, height: "50%" }}>
              <p>
                Your cart is empty.
                <br />
                Not sure where to start?
              </p>
              <p
                onClick={() => {
                  setOpen(false);
                  navigate("/");
                }}
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  marginTop: "15%",
                  textUnderlineOffset: 10,
                  textDecorationThickness: 1,
                }}
              >
                Start with our top picks
              </p>
            </div>
            <img
              height="100%"
              width="100%"
              src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0"
            />
          </Flex>
        )}
      </Drawer>

      <ShoppingCartOutlined id="cart-button" onClick={() => setOpen(true)} />
    </>
  );
};

export default CartButton;
