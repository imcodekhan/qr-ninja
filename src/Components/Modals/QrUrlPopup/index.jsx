import { Flex, Input, Modal, Space } from "antd";
import { useState } from "react";

const QrUrlPopup = ({ onCancel, onOk, img }) => {
  const [url, setUrl] = useState("");
  const [label, setLabel] = useState("");

  return (
    <Modal
      open
      title="we need url to generate QR"
      onOk={onOk}
      onCancel={onCancel}
      okButtonProps={{
        disabled: !url.length,
      }}
      okText={"Add"}
    >
      <Space>
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
      </Space>
      <Flex justify="center" style={{ padding: 20 }}>
        <img src={img[0]} height={400} width={300} />
      </Flex>
    </Modal>
  );
};

export default QrUrlPopup;
