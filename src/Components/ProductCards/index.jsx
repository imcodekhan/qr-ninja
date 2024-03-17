import { Button, Card, Flex, Space } from "antd";
import { toast } from "react-toastify";

import { useState } from "react";
import QrPopup from "../Modals/QrUrlPopup";
import { addToCart, removeFromCart } from "../../Redux/Features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  const { name, img, eco, _id } = props;
  const dispatch = useDispatch();
  const [showQrPopup, setShowQrPopup] = useState(false);
  const { products } = useSelector((state) => state.cart);
  const [isDirectBuy, setIsDirectBuy] = useState(false);
  const navigate = useNavigate();
  const addedToCardProduct = products.find((product) => product._id === _id);

  const onOk = () => {
    if (isDirectBuy) {
      // navigate("/checkout");
      window.open("https://buy.stripe.com/test_00gdUJ8gR6NsdsQ288");
      return;
    }
    dispatch(addToCart(props));
    // toast.success("added to cart");
    setShowQrPopup(false); //
  };

  const handleBuyNow = () => {
    if (addedToCardProduct) {
      navigate("/checkout");
    } else {
      setShowQrPopup(true);
      setIsDirectBuy(true);
    }
  };
  return (
    <>
      {showQrPopup && (
        <QrPopup onCancel={() => setShowQrPopup(false)} onOk={onOk} img={img} />
      )}
      <Card title={name} style={{ width: 300 }}>
        <img width={250} src={img?.[0]} alt="tshirt" />
        <Flex justify="space-between">
          <div>
            <p style={{ textDecoration: "line-through" }}>{eco?.mrp}</p>
            <p>{eco?.sp}</p>
          </div>
          <Flex vertical justify="space-around">
            {addedToCardProduct ? (
              <Space>
                <Button onClick={onOk}>+</Button>
                <Button>{addedToCardProduct.quantity}</Button>
                <Button onClick={() => dispatch(removeFromCart(props))}>
                  -
                </Button>
              </Space>
            ) : (
              <Button onClick={() => setShowQrPopup(true)}>Add to cart</Button>
            )}
            <Button onClick={handleBuyNow}>Buy now</Button>
          </Flex>
        </Flex>
      </Card>
    </>
  );
};

export default Product;
