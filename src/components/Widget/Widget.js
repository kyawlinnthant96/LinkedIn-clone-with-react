import { FiberManualRecord, Info } from "@mui/icons-material";
import React from "react";

// style
import "./Widget.css";

function Widget() {
  const newArticle = (header, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{header}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newArticle("Corona Virus: Myanmar Update", "Top news-500 readers")}
      {newArticle("Economics Crisis", "Top news-506 readers")}
      {newArticle("Ukraine Updates", "International-800 readers")}
      {newArticle("Arsenal Updates", "Sports-789readers")}
    </div>
  );
}

export default Widget;
