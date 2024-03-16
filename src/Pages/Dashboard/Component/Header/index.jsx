import { Flex } from "antd";

const Header = () => {
  return (
    <Flex
      style={{
        background: "white",
        minHeight: 280,
        padding: 24,
        borderRadius: "8px",
      }}
    >
      <div style={{ width: "50%" }}>
        <h5>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
          magni esse iure ipsum. Perspiciatis adipisci molestiae ipsum magni
          quos quibusdam quisquam, repudiandae ut tempore cumque est, officiis,
          explicabo nobis deleniti!
        </h5>
        <Flex gap={10}>
          <h3
            style={{
              border: "1px solid black",
              borderRadius: "50%",
              width: 30,
              height: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            fb
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
            }}
          >
            ig
          </h3>
        </Flex>
      </div>
      <div style={{ marginLeft: "auto" }}>
        <img
          height={500}
          width={400}
          src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?w=480&dpr=1.0"
        />
      </div>
    </Flex>
  );
};

export default Header;
