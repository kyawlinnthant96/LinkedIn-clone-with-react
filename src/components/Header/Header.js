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

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={logo} alt="logo" />
        <div className="header__search">
          <Search />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar={profile} title="Me" />
      </div>
    </div>
  );
}

export default Header;
