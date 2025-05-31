import React, { useState , useContext } from "react";
import "./Table.css";
import Cell from "../Cell/Cell";
import SpreedSheetContext from "../../Context/SpreedSheetContext";
import MouseTracker from "../../Context/MouseTracker";

const Table = () => {
  const { rows, cols, data } = useContext(SpreedSheetContext);
  const [selectionStart, setSelectionStart] = useState(null); // to store selecting cell 
const [selectionEnd, setSelectionEnd] = useState(null);      // to store ending cell to be selected
const [isSelecting, setIsSelecting] = useState(false);     // to track weather selection carrying out or has been ended



  return (
    <div className="table">
      <MouseTracker.Provider value={{selectionStart, setSelectionStart,selectionEnd, setSelectionEnd , isSelecting, setIsSelecting }}>
      <div
        className="table-container"
        // Variabels to have row  * col grid.
        style={{
          "--col": cols,
          "--row": rows,
        }}                  
      >
        {data.flatMap((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              row={rowIndex}
              col={colIndex}
              value={cell}
            />
          ))
        )}
      </div>
      </MouseTracker.Provider>
    </div>
  );
};

export default Table;
