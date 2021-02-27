import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import { SaveAlt } from "@material-ui/icons";

import FileSaver from "file-saver";

import "./Body.css";
// download the image in user's Device
function download(url, fileName) {
  FileSaver.saveAs(url, fileName);
}
//----------------------------------

function Bodyody({ items }) {
  //const alt = tags.split(",")[0];
  const [imageSatus, setImageSatus] = useState(false);
  return (
    <div className="body-image-area">
      {/* className "d-none" hides the element  */}
      {/* If the image is not loaded thn add className "d-none" to Image tag */}
      {items.map((single) => (
        <div>
          <img
            className={`image  ${!imageSatus && "d-none"}`}
            src={single.webformatURL}
            onLoad={() => setImageSatus(true)}
          />

          {/* If the image is loaded then add className "d-none" to Image tag */}

          <IconButton
            className="image-button"
            onClick={() =>
              download(single.webformatURL, single.tags.split(",")[0])
            }
          >
            <SaveAlt />
          </IconButton>
        </div>
      ))}
    </div>
  );
}

export default Bodyody;
