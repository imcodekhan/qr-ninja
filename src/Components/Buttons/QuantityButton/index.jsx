import { DeleteOutlined, MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../../Redux/Features/cartSlice";
import { useDispatch } from "react-redux";

const QuantityButton = (props) => {
  const { quantity, _id } = props;
  const dispatch = useDispatch();

  return (
    <Flex style={{ width: "100%", gap: 5 }}>
      <Flex
        align="center"
        justify="space-evenly"
        style={{ border: "1px solid black", height: 50, flex: 1 }}
      >
        <PlusOutlined onClick={() => dispatch(increaseQuantity({ _id }))} />
        {quantity}
        <MinusOutlined onClick={() => dispatch(decreaseQuantity({ _id }))} />
      </Flex>

      <Flex
        style={{
          width: 50,
          border: "1px solid red",
        }}
        justify="center"
        align="center"
      >
        <DeleteOutlined
          style={{
            fontSize: 22,
            color: "red",
          }}
          onClick={() => dispatch(removeFromCart({ _id }))}
        />
      </Flex>
    </Flex>
  );
};

export default QuantityButton;
