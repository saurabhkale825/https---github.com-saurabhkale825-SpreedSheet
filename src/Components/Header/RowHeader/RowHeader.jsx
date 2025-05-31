import React, {useContext} from 'react'
import SpreedSheetContext from '../../../Context/SpreedSheetContext';
import "./RowHeader.css"



const RowHeader = () => {
  const { rows } = useContext(SpreedSheetContext);

  return (
    <div className="row-headers">
      {Array.from({ length: rows }).map((_, i) => (
        <div className="row-header-cell" key={i}>
          {i + 1}
        </div>
      ))}
    </div>
  );
};

export default RowHeader