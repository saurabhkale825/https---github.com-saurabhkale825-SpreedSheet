import React, { useContext, useState, useEffect } from "react";
import "./Cell.css";
import SpreedSheetContext from "../../Context/SpreedSheetContext";
import { EvaluateFormula } from "../../Utils/Table";
import { handleMouseDown, handleMouseEnter } from "../../Utils/MouseTracker";

const Cell = ({ row, col }) => {
  const { data, setData, setSelectedCell, selectedRange, setSelectedRange } =
    useContext(SpreedSheetContext);
  const cell = data[row][col]; // To get the data/value in the individual cell

  const [editingValue, setEditingValue] = useState(cell.value);
  const [isFocused, setIsFocused] = useState(false); //To track focused input

  useEffect(() => {
    setEditingValue(cell.value);
  }, [cell.value]);

  const handleChange = (e) => setEditingValue(e.target.value);

  const handleBlur = () => {
    const updated = [...data];
    updated[row][col] = { ...cell, value: editingValue };
    setData(updated);
    setIsFocused(false);
  };

  //to select individual cell
  const handleClick = () => {
    setSelectedCell({ row, col });
  };

  //To toggle focus
  const handleFocus = () => setIsFocused(true);

  //To check wheather input value is formula or not
  const isFormula =
    typeof cell.value === "string" && cell.value.startsWith("=");
  const displayValue = isFormula
    ? EvaluateFormula(cell.value, data)
    : cell.value;

  return (
    <div
      className="cell"
      onClick={handleClick}
      onMouseDown={() => handleMouseDown(row, col, setSelectedRange)} // onClicking event
      onMouseEnter={(e) =>
        handleMouseEnter(row, col, selectedRange, setSelectedRange, e)
      }
    >
      <input
        type="text"
        value={isFocused ? editingValue : displayValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur} //After clicking outside the input/cell
        style={{
          fontWeight: cell.bold ? "bold" : "normal",
          backgroundColor: cell.backgroundColor || "white",
        }}
      />
    </div>
  );
};

export default Cell;
