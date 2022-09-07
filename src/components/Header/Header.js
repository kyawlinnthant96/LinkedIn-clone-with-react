import React from "react";

// components
import HeaderOption from "../HeaderOption/HeaderOption";

// style && Icon
import "./Header.css";

import {
  Search,
  Home,
  SupervisorAccount,
  Notifications,
  BusinessCenter,
  Chat,
} from "@mui/icons-material";
import { logo, profile } from "../../images";
// redux
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
// firebase
import { auth } from "../../Firebase/Firebase";
import { signOut } from "firebase/auth";

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  };

  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="logo" />
        <div className="header__search">
          <Search />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption onClick={logoutOfApp} avatar={true} title="Me" />
      </div>
    </div>
  );
}

export default Header;
