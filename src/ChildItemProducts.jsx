import { memo } from "react";
import "./Childproducts.styles.css";

const ChildProducts = ({
  id,
  title,
  image,
  price,
  backgroundcolor,
  changeBackgroundcolor,
  selectedProductId,
  cardColor
}) => {
  console.log("BackGround rendering");
  return (
    <>
      <div className="product-container">
        {
          <div
            key={id}
            className="product-card"

            style={{ backgroundColor: cardColor }}
         
          >
            <img src={image} alt={title} />
            <div className="product-details">
              <h3>{title}</h3>
              <p>${price}</p>

              <button onClick={() => changeBackgroundcolor(id)}>
                {/* <button onClick={()=>changeBackgroundcolor}> */}
                changeBackgroundcolor
              </button>
            </div>
          </div>
        }
      </div>
    </>
  );
};

export default memo(ChildProducts);
