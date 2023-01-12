import myKey from "./KhaltiKey";
import axios from "axios";
let config = {
  publicKey: myKey.publicTestKey,
  productIdentity: "123766",
  productName: "My Ecommerce Store",
  productUrl: "http://localhost:3000",
  eventHandler: {

    onSuccess(payload) {
      console.log(payload);
      let data = {
        token: payload.token,
        amount: payload.amount,

      };

      axios
        .get(
          `https://meslaforum.herokuapp.com/khalti/${data.token}/${data.amount}/${myKey.secretKey}`
        )
        .then((response) => {
          console.log(response.data);
          alert("Thank you for Paying");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // for error handlement
    onError(error) {
      console.log(error);


    },

    onClose() {
      console.log("widget is closing");
    },
    //   ----------------------------------------------------
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default config;



