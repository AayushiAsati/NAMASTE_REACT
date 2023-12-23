import React, { useState } from "react";
const Header = () => {  
   
   const [btnName , setbtnName]  = useState("login")  // react created the new instance of btnName
    return (
      <div className = "header">
        <div>
          <img className ="logocontainer" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Cart</li>
            <button className="login" onClick={() => {
              if (btnName === "login"){
              setbtnName("logout")
              }
              else 
            {
              setbtnName("login")
            }

            //instead of using if else we can use terniary operators
            }}>{btnName}
            </button>
          </ul>
  
        </div>
  
      </div>
    )
  }

export default Header;


//normal js variable does not work for the dynamic rendering that is why we use the useState() so that this update the js variables