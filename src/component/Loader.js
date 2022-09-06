import React from "react";
import "../css/Loader.css";
import { BallTriangle } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="loading">
      <BallTriangle
        height={100}
        width={"100%"}
        radius={5}
        color="orange"
        ariaLabel="ball-triangle-loading"
        wrapperClass={{}}
        wrapperStyle=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
