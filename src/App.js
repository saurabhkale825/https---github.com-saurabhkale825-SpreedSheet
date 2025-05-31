import { useState } from 'react';
import './App.css';
import SpreedSheetContext from './Context/SpreedSheetContext';
import Home from './Pages/Home';

function App() {

  const [rows, setRows] = useState(10);   //Number of Rows in the spreedsheet
  const [cols, setCols] = useState(10);   //Number of Columns in the spreedsheet
  const [selectedCell, setSelectedCell] = useState(null); //To toggle the bold font weight and background color
  //Individual data for each cell
  const [data, setData] = useState(
    Array.from({ length: rows }, () => Array.from({ length: cols }, () => ({ value: "", background: "#ffffff", bold: false }))
    ));
    const [selectedRange , setSelectedRange] = useState(null); // To save the range of the selection in the copy or change style 
    const [copiedData, setCopiedData] = useState(null);  // to copy data from seleted range



  return (
    <div className="App">
      <SpreedSheetContext.Provider value={{ rows, setRows, cols, setCols, data, setData, selectedCell, setSelectedCell ,selectedRange , setSelectedRange ,copiedData, setCopiedData}}>
        <Home />
      </SpreedSheetContext.Provider>

    </div>
  );
}

export default App;
