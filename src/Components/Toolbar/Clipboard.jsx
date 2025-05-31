import React, { useContext } from "react";
import { handlePaste, handleCopyData } from "../../Utils/Cell";
import SpreedSheetContext from "../../Context/SpreedSheetContext";

const Clipboard = () => {
  const {
    selectedCell,
    data,
    setData,
    copiedData,
    selectedRange,
    setCopiedData,
  } = useContext(SpreedSheetContext);

  
  return (
    <div className="toolbar-section">
      <div className="clipboard">
        <button
          className="btn"
          onClick={() => handleCopyData({ selectedRange, data, setCopiedData })}
        >
          Copy
        </button>
        <button
          className="btn"
          onClick={() => {
            setTimeout(() => {
              handlePaste({
                targetCell: selectedCell,
                data,
                setData,
                copiedData,
              });
            }, 0);
          }}
        >
          Paste
        </button>
      </div>
      <p className="toolbar-label">Clipboard</p>
    </div>
  );
};

export default Clipboard;
