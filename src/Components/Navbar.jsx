import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MdOutlineExplore } from "react-icons/md";
import { AiOutlineTag } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathMatchRoute = (route) => {
    if (route == location.pathname) {
      return true;
    }
  };
  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ui className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <MdOutlineExplore
              fill={pathMatchRoute("/") ? "2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbatListItem"
              }
            >
              Explore
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/offers")}>
            <AiOutlineTag
              fill={pathMatchRoute("/offers") ? "2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/offers")
                  ? "navbarListItemNameActive"
                  : "navbatListItem"
              }
            >
              Offers
            </p>
          </li>
          <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <AiOutlineUser
              fill={pathMatchRoute("/profile") ? "2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p>Profile</p>
          </li>
        </ui>
      </nav>
    </footer>
  );
}

export default Navbar;
