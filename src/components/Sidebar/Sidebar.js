import { Avatar } from "@mui/material";
import React from "react";

// styel && img , icon
import "./Sidebar.css";
import { wallpaper, profile } from "../../images";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={wallpaper} alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Kyaw Linn Thant</h2>
        <h4>devkyaw@gmail.com</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">256</p>
        </div>
        <div className="sidebar__stat">
          <p>View on posts</p>
          <p className="sidebar__statNumber">356</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("react")}
        {recentItem("reactnative")}
        {recentItem("scrum")}
        {recentItem("reactdeveloper")}
      </div>
    </div>
  );
}

export default Sidebar;
