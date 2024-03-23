import { Button, Card, Flex, Space } from "antd";
import { toast } from "react-toastify";

import { useState } from "react";
import { addToCart, removeFromCart } from "../../../Redux/Features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FALLBACK_IMAGE } from "../../../utils/constants";
import AddToCartButton from "../../Buttons/AddToCartButton";
import QuantityButton from "../../Buttons/QuantityButton";

const ProductCard = (props) => {
  const { name, img, eco, _id } = props;
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.cart);
  const [isDirectBuy, setIsDirectBuy] = useState(false);
  const navigate = useNavigate();
  const addedToCardProduct = products.find((product) => product._id === _id);

  return (
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
          <QuantityButton quantity={addedToCardProduct.quantity} {...props} />
        ) : (
          <AddToCartButton {...props} />
        )}
      </Flex>
    </Card>
  );
};

export default ProductCard;
