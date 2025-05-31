import React from "react";
import "./Toolbar.css";
import File from "./File";
import Clipboard from "./Clipboard";
import Edit from "./Edit";
import DynamicGrid from "../DynamicGrid/DynamicGrid";


const Toolbar = () => {

  return (
    <div className="toolbar">
      <File />
      <Clipboard />
      <Edit />
      <DynamicGrid />
    </div>
  );
};

export default Toolbar;
