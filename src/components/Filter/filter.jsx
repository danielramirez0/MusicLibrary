import React from "react";
import "./filter.css";
const Filter = (props) => {
  return (
    <>
      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Filter
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li>
          <a className="dropdown-item" href="http://localhost:3000">
            Action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="http://localhost:3000">
            Another action
          </a>
        </li>
        <li>
          <a className="dropdown-item" href="http://localhost:3000">
            Something else here
          </a>
        </li>
      </ul>
    </>
  );
};

export default Filter;
