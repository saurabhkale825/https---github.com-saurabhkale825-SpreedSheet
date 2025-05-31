//Function to track start point and end point on mouse click
export const handleMouseDown = (row, col, setSelectedRange) => {
  setSelectedRange({ start: { row, col }, end: { row, col } });
};

//Function to track  end point on mouse leave
export const handleMouseEnter = (row, col, selectedRange, setSelectedRange, e) => {
  if (e.buttons !== 1 || !selectedRange?.start) return;
  setSelectedRange({ ...selectedRange, end: { row, col } });
  console.log(selectedRange)
};

///Function to track cells in selected range

export const isCellInSelectedRange = (row, col, selectedRange) => {
  if (!selectedRange) return false;

  const { start, end } = selectedRange;

  const topRow = Math.min(start.row, end.row);
  const bottomRow = Math.max(start.row, end.row);
  const leftCol = Math.min(start.col, end.col);
  const rightCol = Math.max(start.col, end.col);

  return row >= topRow && row <= bottomRow && col >= leftCol && col <= rightCol;
};
