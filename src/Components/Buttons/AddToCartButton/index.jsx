import { Button, Drawer, Flex, Input, Space } from "antd";
import { FALLBACK_IMAGE } from "../../../utils/constants";
import { useState } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { addToCart } from "../../../Redux/Features/cartSlice";
import { useDispatch } from "react-redux";

const AddToCartButton = (props) => {
  const { img } = props;
  const [url, setUrl] = useState("");
  const [label, setLabel] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  function handleContinue() {
    console.log("handleContinue");
    dispatch(addToCart(props));
    const cartButton = document.getElementById("cart-button");
    cartButton.click();
    setOpen(false);
  }

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
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          },
          wrapper: {
            maxWidth: 450,
            width: "100%",
          },
        }}
      >
        <div>
          <div>
            <label htmlFor="label">Label</label>
            <Input
              name="label"
              placeholder="your label..."
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="url">URL*</label>
            <Input
              placeholder="your url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <Flex justify="center" style={{ padding: 20 }}>
            <img src={img?.[0] || FALLBACK_IMAGE} height={400} width={300} />
          </Flex>
        </div>
        <Button
          style={{
            borderRadius: 0,
            width: "100%",
            backgroundColor: "yellow",
            height: 80,
            marginTop: "auto",
            fontSize: 28,
            fontWeight: "lighter",
          }}
          onClick={handleContinue}
        >
          continue
        </Button>
      </Drawer>
      <Button
        style={{
          borderRadius: 0,
          border: "none",
          backgroundColor: "yellow",
          height: 50,
        }}
        onClick={() => setOpen(true)}
      >
        Add to cart
      </Button>
    </>
  );
};

export default AddToCartButton;
