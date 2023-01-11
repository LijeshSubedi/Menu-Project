import React from "react";
import useMenu from "../files/MenuContext";
import CardCom from "../components/CardCom";

const CartPage = () => {
  const { total, items } = useMenu();

  return (
    <div>
      <>
        <h1 className="heading">your total ={total}</h1>
        <div className="product-container">
          {items.map((cartProduct, index) => {
            return (
              <>
                <CardCom
                  key={index}
                  name={cartProduct.name}
                  imgurl={cartProduct.imgurl}
                  price={cartProduct.price}
                />
              </>
            );
          })}
        </div>
      </>
    </div>
  );
};

export default CartPage;
