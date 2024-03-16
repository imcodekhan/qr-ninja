import { Divider, Flex } from "antd";

const Category = () => {
  return (
    <div style={{ position: "relative" }}>
      <Divider />
      <Flex>
        <h3
          style={{
            //     border: "1px solid black",
            //     borderRadius: "50%",
            //     width: 30,
            //     height: 30,
            //     display: "flex",
            //     justifyContent: "center",
            //     alignItems: "center",
            position: "absolute",
            top: -30,
            //     right: 200,
          }}
        >
          category
        </h3>
        <h3
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            width: 30,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: -30,
            right: 300,
          }}
        >
          all
        </h3>
        <h3
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            width: 30,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: -30,
            right: 250,
          }}
        >
          os
        </h3>
        <h3
          style={{
            border: "1px solid black",
            borderRadius: "50%",
            width: 30,
            height: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: -30,
            right: 200,
          }}
        >
          md
        </h3>
      </Flex>
    </div>
  );
};

export default Category;
