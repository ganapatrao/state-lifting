import { memo } from "react";
import "./Childproducts.styles.css";

const ChildProducts = ({
  products,
  backgroundcolor,
  changeBackgroundcolor,
  productId,
}) => {
  console.log("BackGround rendering");
  return (
    <>
      <div className="product-container">
        {products &&
          products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              //   style={{ backgroundColor: backgroundcolor }}
              style={{
                backgroundColor:
                  product.id === productId ? backgroundcolor : "white",
              }}
            >
              <img src={product.image} alt={product.title} />
              <div className="product-details">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                {/* <p>{product.description}</p> */}
                <button onClick={() => changeBackgroundcolor(product.id)}>
                  {/* <button onClick={()=>changeBackgroundcolor}> */}
                  changeBackgroundcolor
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default memo(ChildProducts);
