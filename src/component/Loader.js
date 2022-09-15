import React from "react";
import "../css/Loader.css";
import { GridLoader, HashLoader, SyncLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="loading">
      <SyncLoader color="orange" />
    </div>
  );
};

export default Loader;
