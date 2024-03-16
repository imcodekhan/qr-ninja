import { Button, Form, Input } from "antd";
import Layout from "../../Components/Layout";

const Contact = () => {
  function onFinish(values) {
    console.log(values);
  }

  return (
    <Form
      name="checkout-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      layout="vertical"
    >
      <Layout>
        <h3>Contact us:</h3>
        <Form.Item
          label="Email Address"
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter email address",
              type: "text",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter your name",
              type: "text",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Message"
          name="message"
          rules={[
            {
              required: true,
              message: "Please enter your message",
              type: "text",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Send
          </Button>
        </Form.Item>
      </Layout>
    </Form>
  );
};

export default Contact;
