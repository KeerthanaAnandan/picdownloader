import React from "react";

import "./Body.css";

function Bodyody({ items, setItems }) {
  return (
    <div className="body-image-area">
      {items.map((single) => (
        <img className="image" src={single.webformatURL} alt="images" />
      ))}
    </div>
  );
}

export default Bodyody;
