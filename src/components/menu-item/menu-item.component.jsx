import React from "react";
import "./menu-item.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = (props) => {
  return (
    <div
      className={`${props.size} menu-item`}
      onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url('${props.imageUrl}')`,
        }}
      />
      <div className="content">
        <div className="title">{props.title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
