import React from "react";
import Table from "../Components/Table/Table";
import ColumnHeader from "../Components/Header/ColumnHeader/ColumnHeader";
import RowHeader from "../Components/Header/RowHeader/RowHeader";
import Toolbar from "../Components/Toolbar/Toolbar";

const Home = () => {
  return (
    
    <>
    {/* Container for the formula and dynamic row/column button*/}
    <div className="sheet-header">
      <Toolbar />
    </div>

     {/* Container for the Grid box*/}
    <div className="sheet-body">
      <div>
        <ColumnHeader />
      </div>

      <div style={{ display: "flex" }}>
        <RowHeader />
        <Table />
      </div>
      </div>
    </>
  );
};

export default Home;
