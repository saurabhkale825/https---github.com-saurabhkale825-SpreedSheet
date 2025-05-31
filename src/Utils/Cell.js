
// Function to handle Text font weight toggling from normal to bold or vice-versa
export const handleBold = ({selectedRange , data , setData}) => {
  if (!selectedRange) return;
  const updated = [...data];
  const { start, end } = selectedRange;
  for (let r = start.row; r <= end.row; r++) {
    for (let c = start.col; c <= end.col; c++) {
      updated[r][c] = { ...updated[r][c], bold: !updated[r][c].bold };
    }
  }
  setData(updated);
}; 

// Function to handle Background change of selected cells
export const handleBackground = ({selectedRange , data , setData,e}) => {
  const color = e.target.value;
  if (!selectedRange) return;
  const updated = [...data];
  const { start, end } = selectedRange;
  for (let r = start.row; r <= end.row; r++) {
    for (let c = start.col; c <= end.col; c++) {
      updated[r][c] = { ...updated[r][c], backgroundColor: color };
    }
  }
  setData(updated);
};

// Function to handle ccopying of data from selected cells
export const handleCopyData = ({ selectedRange, data, setCopiedData }) => {
    if (!selectedRange) return;

  const { start, end } = selectedRange;
  const copied = [];

  for (let r = start.row; r <= end.row; r++) {
    const row = [];
    for (let c = start.col; c <= end.col; c++) {
      row.push({ ...data[r][c] });
    }
    copied.push(row);
  }

  setCopiedData(copied);
}


// Function to handle pasting of data from selected cells to targeted cells
export const handlePaste = ({ targetCell, data, setData, copiedData }) => {
  if (!copiedData || !targetCell) return;

  const updated = [...data];
  const startRow = targetCell.row;
  const startCol = targetCell.col;

  for (let r = 0; r < copiedData.length; r++) {
    for (let c = 0; c < copiedData[r].length; c++) {
      const destRow = startRow + r;
      const destCol = startCol + c;

      if (updated[destRow] && updated[destRow][destCol]) {
        updated[destRow][destCol] = { ...copiedData[r][c] };
      }
    }
  }

  setData(updated);
};
