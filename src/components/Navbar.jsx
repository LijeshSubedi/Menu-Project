import React from "react";
import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <>
   <div className="navbar">
   <Link className="nav-links" to="/" >Home</Link> 
   <Link className="nav-links" to="/MenuPage " >Menu</Link> 
   <Link className="nav-links" to="/SignupPage " >Signup</Link> 
   <Link className="nav-links" to="/SigninPage " >Signin</Link> 
   <Link className="nav-links" to="/Cartpage" >Cart</Link> 
   <Link className="nav-links" to="/AboutDeveloperPage" >About Developer</Link> 


    </div> 
    </>
  );
};

export default Navbar;
