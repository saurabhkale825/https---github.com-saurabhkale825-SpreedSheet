import React, { useContext } from "react";
import "./ColumnHeader.css";
import SpreedSheetContext from "../../../Context/SpreedSheetContext";

const ColumnHeader = () => {
  const { cols } = useContext(SpreedSheetContext);

    //Function to convert the column number in the Alphabatical manner(A-> B -> C -> ....-> AA -> AB -> .... AAA-> )
    const columnLabel = (i) => {
    let label = '';
    while (i >= 0) {
      label = String.fromCharCode((i % 26) + 65) + label;
      i = Math.floor(i / 26) - 1;
    }
    return label;
  };


  return (
    <div className="column-headers">
      <div className="corner-cell"></div>   {/* Empty cell to adjust column numbering */}
      <div style={{display : "flex"}}>
      {Array.from({ length: cols }).map((_, i) => (
        <div className="col-header-cell" key={i}>
      {columnLabel(i)}
        </div>
       
      ))}
       </div>
    </div>
  );
};

export default ColumnHeader;
