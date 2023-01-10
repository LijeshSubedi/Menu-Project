import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return <div>

      <div className="header">
<Navbar />
        <div className="row">
          <div className="col">
            <h1>FOOD GASM</h1>
            <br />
            <p>
              From the freshest ingredients to the most skillful preparation, we
              offer only the best for our customers.
            </p>
          </div>
          <div className="col">
            <img src="images/food1.png" alt="require" />
          </div>
        </div>



        <div className="row">
          <div className="col">
            <img src="images/food2.png" alt="require" />
          </div>
          <div className="col">
            <h1>FOOD GASM</h1>
            <br />
            <p>
              From the freshest ingredients to the most skillful preparation, we
              offer only the best for our customers.
            </p>
          </div>
        </div>


        <div className="row">
          <div className="col">
            <h1>FOOD GASM</h1>
            <br />
            <p>
              From the freshest ingredients to the most skillful preparation, we
              offer only the best for our customers.
            </p>
          </div>
          <div className="col">
            <img src="images/food3.png" alt="require" />
          </div>
        </div>
      </div>
    </div>;
};

export default Header;
