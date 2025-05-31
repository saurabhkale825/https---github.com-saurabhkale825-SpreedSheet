import React, { useContext } from "react";
import { saveSpreadsheet, loadSpreadsheet } from "../../Utils/file";
import SpreedSheetContext from "../../Context/SpreedSheetContext";

const File = () => {
  const { data , setData, setRows, setCols} = useContext(SpreedSheetContext);

  const handleLoad = (e) => {
    const file = e.target.files[0];
    if (file) loadSpreadsheet(file, setData, setRows, setCols);
  };
  return (
    <>
      <div className="toolbar-section">
        <div className="file-container">
          <button
            className="btn"
            onClick={() => saveSpreadsheet(data)}
          >
            Save
          </button>
          <label className="btn">
            Load
            <input
              type="file"
              accept="application/json"    
              style={{ display: "none" }}
              onChange={handleLoad}
            />
          </label>
        </div>
        <p className="toolbar-label">File</p>
      </div>
    </>
  );
};

export default File;
