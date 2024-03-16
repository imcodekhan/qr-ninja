import { Button, Card, Flex } from "antd";
import { toast } from "react-toastify";

import { useState } from "react";
import QrPopup from "../Modals/QrUrlPopup";
import { addToCart } from "../../Provider/cart";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const { name, img, eco } = props;
  const dispatch = useDispatch();
  const [showQrPopup, setShowQrPopup] = useState(false);
  const onOk = () => {
    console.log("added to cart");
    dispatch(addToCart(props));
    toast("added to cart");
    setShowQrPopup(false); //
  };
  return (
    <>
      {showQrPopup && (
        <QrPopup onCancel={() => setShowQrPopup(false)} onOk={onOk} img={img} />
      )}
      <Card title={name} style={{ width: 300 }}>
        <img width={250} src={img[0]} alt="tshirt" />
        <Flex justify="space-between">
          <div>
            <p style={{ textDecoration: "line-through" }}>{eco.mrp}</p>
            <p>{eco.sp}</p>
          </div>
          <Flex vertical justify="space-around">
            <Button onClick={() => setShowQrPopup(true)}>Add to cart</Button>
            <Button onClick={() => setShowQrPopup(true)}>Buy now</Button>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default Product;
