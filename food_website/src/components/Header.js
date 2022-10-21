import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function Header({ cart }) {
  return (
    <div className="header">
      <Link to="/">
        <div className="left">
          <div className="logo">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="pizza-slice"
              class="svg-inline--fa fa-pizza-slice Header_icon__3urzh"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ color: "red", width: "40px", height: "40px" }}
            >
              <path
                fill="currentColor"
                d="M169.7 .9c-22.8-1.6-41.9 14-47.5 34.7L110.4 80c.5 0 1.1 0 1.6 0c176.7 0 320 143.3 320 320c0 .5 0 1.1 0 1.6l44.4-11.8c20.8-5.5 36.3-24.7 34.7-47.5C498.5 159.5 352.5 13.5 169.7 .9zM399.8 410.2c.1-3.4 .2-6.8 .2-10.2c0-159.1-128.9-288-288-288c-3.4 0-6.8 .1-10.2 .2L.5 491.9c-1.5 5.5 .1 11.4 4.1 15.4s9.9 5.6 15.4 4.1L399.8 410.2zM176 272c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32zm128 64c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32zM160 384c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z"
              ></path>
            </svg>
          </div>
          <div className="title">
            <h1>Pizza</h1>
          </div>
        </div>
      </Link>
      <div className="right">
        <Link to="/cart">
          <div className="cart">
            <FontAwesomeIcon
              style={{ width: "50px", height: "50px", color: "red" }}
              icon={faCartShopping}
            />
            <h2>Cart - {cart.length}</h2>
          </div>
        </Link>
        <Link to="/admin">
          <div className="admin">
            <FontAwesomeIcon
              style={{ width: "30px", height: "30px", color: "red" }}
              icon={faUser}
            />
            <h2>Admin</h2>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
