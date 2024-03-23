import { Button, Card, Flex, Space } from "antd";
import { toast } from "react-toastify";

import { useState } from "react";
import { addToCart, removeFromCart } from "../../../Redux/Features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FALLBACK_IMAGE } from "../../../utils/constants";
import AddToCartButton from "../../Buttons/AddToCartButton";

const ProductCard = (props) => {
  const { name, img, eco, _id } = props;
  const dispatch = useDispatch();
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
      {/* {showQrPopup && (
        <QrUrlPopup
          onCancel={() => setShowQrPopup(false)}
          onOk={onOk}
          img={img}
        />
      )} */}
      <Card style={{ width: 300 }} styles={{ body: { padding: 0 } }}>
        <img width="100%" src={img?.[0] || FALLBACK_IMAGE} alt="tshirt" />
        <Flex
          justify="space-between"
          style={{ paddingLeft: 10, paddingRight: 10 }}
        >
          <p>{name}</p>
          <p>{eco?.sp || "799"}</p>
        </Flex>
        <Flex vertical justify="space-around">
          {addedToCardProduct ? (
            <Space>
              <Button onClick={onOk}>+</Button>
              <Button>{addedToCardProduct.quantity}</Button>
              <Button onClick={() => dispatch(removeFromCart(props))}>-</Button>
            </Space>
          ) : (
            <AddToCartButton {...props} />
          )}
        </Flex>
      </Card>
    </>
  );
};

export default ProductCard;
