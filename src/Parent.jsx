import { useEffect, useState, useCallback } from "react";
import ChildProducts from "./ChildItemProducts";

const Parent = () => {
  const [products, setProducts] = useState([]);
  const [backgroundcolor, setBackgroundcolor] = useState("");
  const [id, setId] = useState(0);

  const onChangeBackgroundcolor = useCallback((productId) => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // const randomColor = "yellow";
console.log("productId",productId)
    setBackgroundcolor(randomColor);

    setId(productId)
  });

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        setProducts([]);
      });
  }, []);


  return (
    <>
      <div style={{ backgroundColor: backgroundcolor }}>Test</div>
      <div>
        <ChildProducts
          products={products}
          backgroundcolor={backgroundcolor}
          changeBackgroundcolor={onChangeBackgroundcolor}
          productId={id}
        />
      </div>
    </>
  );
};

export default Parent;
