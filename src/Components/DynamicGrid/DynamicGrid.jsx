import React, { useContext } from "react";
import "./DynamicGrid.css";
import SpreedSheetContext from "../../Context/SpreedSheetContext";
import { addRow, addColumn } from "../../Utils/Table";

const DynamicGrid = () => {
  const { rows, setRows, cols, setCols, data, setData } =
    useContext(SpreedSheetContext);

  //To add row dynamically to th grid
  const handleAddRow = () => {
    addRow({ cols, setData, data, rows, setRows });
  };

  //To add column dynamically to th grid
  const handleAddColumn = () => {
    addColumn({ data, setData, cols, setCols });
  };

  return (
    <div className="toolbar-section">
      <div className="dynamic-grid">
        <button className="btn" onClick={handleAddRow}>
          Add Row
        </button>
        <button className="btn" onClick={handleAddColumn}>
          Add Column
        </button>
      </div>
      <p className="toolbar-label">Customize</p>
    </div>
  );
};

export default DynamicGrid;
