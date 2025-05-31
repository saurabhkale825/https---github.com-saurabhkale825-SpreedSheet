// To add rows to the spreedsheet dynamically
export const addRow = ({ cols, setData, data, rows, setRows }) => {
    const newRow = Array(cols).fill("");
    setData([...data, newRow]);
    setRows(rows + 1);
}

// To add columns to the spreedsheet dynamically
export const addColumn = ({ data, setData, cols, setCols }) => {
    const newData = data.map((row) => [...row, ""]);
    setData(newData);
    setCols(cols + 1);
};

//function for evalute formulas

export const EvaluateFormula = (formula, data) => {
  if (!formula.startsWith("=")) return formula;

  //function to convert the column number from A-> B format to number
  const cellNameToIndex = (cell) => {
    const match = cell.match(/^([A-Z]+)(\d+)$/i);
    if (!match) return { row: 0, col: 0 };

    const [, colLetters, rowNumber] = match;
    let col = 0;

    for (let i = 0; i < colLetters.length; i++) {
      col *= 26;
      col += colLetters.charCodeAt(i) - 64; // A = 1
    }

    return {
      row: parseInt(rowNumber, 10) - 1,
      col: col - 1, // convert to 0-based index
    };
  };

  const [operation, range] = formula.slice(1).split(/[()]/).filter(Boolean);
  const [start, end] = range.split(":");

  const { row: row1, col: col1 } = cellNameToIndex(start.trim());
  const { row: row2, col: col2 } = cellNameToIndex(end.trim());

  let values = [];

  for (let r = row1; r <= row2; r++) {
    for (let c = col1; c <= col2; c++) {
      const cell = data[r]?.[c];
      const val = typeof cell === "object" ? cell.value : cell;
      const num = parseFloat(val);
      if (!isNaN(num)) values.push(num);
    }
  }

  switch (operation.toUpperCase()) {
    case "SUM":
      return values.reduce((a, b) => a + b, 0);
    case "AVERAGE":
      return( (values.reduce((a, b) => a + b, 0) / values.length || 0).toFixed());
    default:
      return "Invalid Formula";
  }
};
