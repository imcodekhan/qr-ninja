import { Anchor, Button, Card, Divider, Flex } from "antd";

const OrderCard = (props) => {
  const {
    orderId,
    trackingId,
    invoiceId,
    estimatedDeliveryDate,
    products,
    paymentDetails,
    shippingAddress,
    orderDate,
    orderSummary,
  } = props;

  function handleInvoice() {
    console.log(invoiceId);
  }

  function handleTracking() {
    console.log(trackingId);
  }

  return (
    <Card style={{ width: "100%" }}>
      <Flex justify="space-between">
        <h2>Order ID: {orderId}</h2>
        <Flex gap={10}>
          <Button onClick={handleInvoice}>Invoice</Button>
          <Button onClick={handleTracking}>Track</Button>
        </Flex>
      </Flex>
      <Flex>
        <h4>Order date: {orderDate}</h4>
        &nbsp;
        <h3>| Estimated delivery : {estimatedDeliveryDate}</h3>
      </Flex>
      <Divider />
      <div>
        {products.map((product) => (
          <Flex justify="space-between">
            <Flex gap={20}>
              <img
                height={100}
                width={100}
                src={product.img}
                alt={product.name}
              />
              <div>
                <h1 style={{ margin: 0 }}>{product.name}</h1>
                <h3 style={{ margin: 0 }}>
                  {product.size} | {product.category} | {product.color}
                </h3>
              </div>
            </Flex>
            <div>
              <h2 style={{ margin: 0 }}>Rs. {product.price}</h2>
              <h3 style={{ margin: 0 }}>Qty: {product.quantity}</h3>
            </div>
          </Flex>
        ))}
      </div>
      <Divider />
      <Flex justify="space-between">
        <div>
          <h2>Payment:</h2>
          <p>Paid via: {paymentDetails.method}</p>
          <p>
            {paymentDetails.cardType} {paymentDetails.cardNumber}
          </p>
        </div>
        <div>
          <h2>Delivery</h2>
          <p>
            {shippingAddress.addressLine1},&nbsp;{shippingAddress.addressLine2}
            <br />
            {shippingAddress.city},&nbsp;{shippingAddress.state}-&nbsp;
            {shippingAddress.postalCode}
            <br />
            {shippingAddress.phoneNumber}
          </p>
        </div>
      </Flex>
      <Divider />
      <Flex justify="space-between">
        <div>
          <Anchor>Order info</Anchor>
          <Anchor>Delivery info</Anchor>
        </div>
        <div>
          <h2 style={{ margin: 0 }}>Order Summary</h2>
          <h3 style={{ margin: 0 }}>Subtotal: {orderSummary.subTotal}</h3>
          <h5 style={{ margin: 0 }}>Discount: {orderSummary.discount}</h5>
          <h5 style={{ margin: 0 }}>
            Delivery charge: {orderSummary.deliveryCharge}
          </h5>
          <h5 style={{ margin: 0 }}>Tax: {orderSummary.tax}</h5>
          <h3 style={{ margin: 0 }}>Total: {orderSummary.total}</h3>
        </div>
      </Flex>
    </Card>
  );
};

export default OrderCard;
