import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import config from "./KhaltiConfig";
const Khalti = (props) => {
  let buttonStyles = {
    backgroundcolor: "#A31ACB",
    padding: "10px",
    color: "#000000",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
  };
  let checkout = new KhaltiCheckout(config);
  return (
    <>
      <button
        on
        onClick={() => {
          checkout.show({ amount: props.price*100});
        }}
        style={buttonStyles}
      >
        Pay with khalti
      </button>
    </>
  );
};
export default Khalti;
