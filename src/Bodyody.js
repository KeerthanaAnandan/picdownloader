import React, { useState } from "react";
import { IconButton } from "@material-ui/core";
import { SaveAlt } from "@material-ui/icons";
//import DialogTitle from "@material-ui/core/DialogTitle";
//import Dialog from "@material-ui/core/Dialog";

import FileSaver from "file-saver";

import "./Body.css";
// download the image in user's Device
function download(url, fileName) {
  FileSaver.saveAs(url, fileName);
}
//----------------------------------

function Bodyody({ items }) {
  //const alt = tags.split(",")[0];
  // const [imageSatus, setImageSatus] = useState(false);
  return (
    <div className="body-image-area">
      {/* <Dialog
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
     </DialogTitle> */}

      {items.map((single) => (
        <div key={single.id} className="image-card">
          <img
            className="image"
            src={single.webformatURL}
            // onLoad={() => setImageSatus(true)}
          />
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
      {/*</Dialog>*/}
    </div>
  );
}

export default Bodyody;
