// Function to save data in JSON format at local device

export const saveSpreadsheet = (data) => {
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "spreadsheet.json";
  a.click();
  URL.revokeObjectURL(url);
};


// Function to load data from local device

export const loadSpreadsheet = (file, setData, setRows, setCols) => {
  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const loadedData = JSON.parse(event.target.result);
      setData(loadedData);
      setRows(loadedData.length);
      setCols(loadedData[0]?.length || 0);
    } catch (e) {
      alert("Invalid JSON file.");
    }
  };
  reader.readAsText(file);
};
