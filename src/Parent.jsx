import { useEffect, useState, useCallback } from "react";
import ChildProducts from "./ChildItemProducts";

const Parent = () => {
  const [products, setProducts] = useState([]);
  // const [backgroundcolor, setBackgroundcolor] = useState("");
  const [selectedProductId, setId] = useState({});


  const onChangeBackgroundcolor = useCallback((productId) => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    // const randomColor = "yellow";

   // setBackgroundcolor(randomColor);

    // setId(productId);
    setId((prev) => ({ ...prev, [selectedProductId]: randomColor }));

    
  },[]);

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
      <div>
        {products.map((product) => (
          <ChildProducts
            key={product.id}
            // style={{
            //   backgroundColor:
            //     // product.id === selectedProductId ? backgroundcolor : "white",
            //     selectedProductId[product.id] ? selectedProductId[product.id] : "white"
            // }}
              cardColor={
                selectedProductId[product.id] ? selectedProductId[product.id] : "white"
            }
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            // productid={product.id}
            // {...product}
            // backgroundcolor={backgroundcolor}
            changeBackgroundcolor={onChangeBackgroundcolor}
            // selectedProductId={selectedProductId}
          />
        ))}
      </div>
    </>
  );
};

export default Parent;
