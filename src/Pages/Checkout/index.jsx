import { Button, Checkbox, Divider, Flex, Form, Input, Space } from "antd";

const Checkout = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Here you can handle form submission logic
  };
  return (
    <Form
      name="checkout-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
    >
      <div>
        <h3>Contact information:</h3>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter email address",
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </div>

      <Divider />

      <div>
        <h3>Shipping address:</h3>
        <Flex style={{ width: "99%" }} gap={20}>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
            style={{ width: "50%" }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
            style={{ width: "50%" }}
          >
            <Input />
          </Form.Item>
        </Flex>

        <Form.Item
          label="Address Line 1"
          name="addressLine1"
          rules={[{ required: true, message: "Please input your address!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Address Line 2" name="addressLine2">
          <Input />
        </Form.Item>

        <Form.Item
          label="City"
          name="city"
          rules={[{ required: true, message: "Please input your city!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="State"
          name="state"
          rules={[
            { required: true, message: "Please input your state/province!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Postal Code"
          name="postalCode"
          rules={[
            { required: true, message: "Please input your postal code!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input />
        </Form.Item>
      </div>
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Go to payment
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Checkout;
