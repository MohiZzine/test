import React from "react";
import "./FileInput.css";

const FileInput = (props) => {
  return (
    <div className="file-container">
      <input {...props.input} value={props.value} onChange={props.onChange} />
    </div>
  );
};

export default FileInput;
