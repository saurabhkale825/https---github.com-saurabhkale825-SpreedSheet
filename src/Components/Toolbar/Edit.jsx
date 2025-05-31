import React, { useContext } from 'react'
import {
  handleBold,
  handleBackground,
  
} from "../../Utils/Cell";
import SpreedSheetContext from "../../Context/SpreedSheetContext";

const Edit = () => {

    const { selectedRange, data, setData} = useContext(SpreedSheetContext)
  return (
    <div className="toolbar-section">
      <div className="toolbar-container">
        <button
          className="btn"
          onClick={() => handleBold({ selectedRange, data, setData })}
        >
          Bold
        </button>
       
        <div style={{display:"flex" , flexDirection :"column" , }}>
        <input
          type="color"
          onChange={(e) =>
            handleBackground({ selectedRange, data, setData, e })
          }
        />
         <label style={{color:"white" , fontSize :"0.7rem"}}>Background</label>
         </div>
      </div>
      <p className="toolbar-label">Edit</p>
      </div>
  )
}

export default Edit