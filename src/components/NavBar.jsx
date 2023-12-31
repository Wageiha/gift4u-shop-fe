import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./Navbar.css";

const NavBar = () => {
  const [
    { authenticated },
    { name },
    ,
    ,
    { avatar },
    { logoutHandler },
    { click, setClick },
  ] = useContext(UserContext);

/*   let showCount = JSON.parse(localStorage.getItem("cart-list")) && JSON.parse(localStorage.getItem("cart-list")).length > 0? "block" : "none"  */

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <header className="navbar">
        <div className="container" style={{display:"flex", justifyContent:"space-between"}}>
          <NavLink to="/home" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/Gift (3).png" alt="" />
          </NavLink>
          {authenticated && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "90px",
              }}
            >
              {avatar && (
                <img
                  src={avatar}
                  alt="User Avatar"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                />
              )}
              <h3 style={{fontSize:"18px"}}>Welcome {name.split(" ")[0]}</h3>
            </div>
          )}

         {/*  <NavLink to="/shopping-cart">
          <div  className="fa-solid fa-cart-shopping shoppingbasket"> 
  <div className="basketitems" style={{display:`${showCount}`}}>{JSON.parse(localStorage.getItem("cart-list"))? JSON.parse(localStorage.getItem("cart-list")).length:""}</div>
</div>
          </NavLink> */}

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
              <NavLink
                to="/home"
                className="nav-links"
                onClick={closeMobileMenu}
              >
               <i class="fa-solid fa-house" style={{marginRight:"10px"}}></i>Home
              </NavLink>
            </li>
            {!authenticated && (
              <li className="nav-item">
                <NavLink
                  to="/register"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {" "}
                  <i class="fa-solid fa-clipboard-user" style={{marginRight:"10px"}}></i>Register  {" "}
                </NavLink>
              </li>
            )}

            {authenticated && (
              <li className="nav-item">
                <NavLink
                  to="/my-profile"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                <i class="fa-solid fa-user" style={{marginRight:"10px"}}></i>My Profile 
                </NavLink>
              </li>
            )}

{authenticated && (
              <li className="nav-item">
                <NavLink
                  to="/shopping-cart"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
               <i class="fa-solid fa-cart-shopping" style={{marginRight:"10px"}}></i>Shopping Cart 
                </NavLink>
              </li>
            )}

            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                <i class="fa-solid fa-phone-volume" style={{marginRight:"10px"}}> </i>Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/privacy-policy" className="nav-links" onClick={closeMobileMenu}>
            Privacy Policy
          </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/about-us" className="nav-links" onClick={closeMobileMenu}>
            <i class="fa-regular fa-address-card" style={{marginRight:"10px"}}></i>About Us
          </NavLink>
            </li>
            {authenticated ? (
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-links"
                  onClick={logoutHandler}
                >
                  <i class="fa-solid fa-arrow-right-from-bracket" style={{marginRight:"10px"}}></i>Logout
                </NavLink>
              </li>
            ) : (
              <li className="nav-item">
                {" "}
                <NavLink
                  to="/login"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  <i class="fa-solid fa-right-to-bracket" style={{marginRight:"10px"}}> </i>Login
                </NavLink>
              </li>
            )}
          </ul>
          
        </div>
      </header>
    </>
  );
};

export default NavBar;
