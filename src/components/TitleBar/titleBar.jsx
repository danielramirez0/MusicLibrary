import React from "react";
import "./titleBar.css";

function TitleBar(props) {
  return (
    <div className="row row-spacer">
      <div className="col-md-12">
        <div className="titlebar-nav">
          <h1>Music Library Search</h1>
        </div>
      </div>
    </div>
  );
}

export default TitleBar;
