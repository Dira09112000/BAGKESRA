import React from "react";
import { useState, useEffect } from "react";
import "../css/News.css";
const Poto = () => {
  const [GetData, SetData] = useState(null);
  useEffect(() => {
    getPoto();
    return () => {
      SetData(null);
    };
  }, []);

  function getPoto() {
    const axios = require("axios");
    axios
      .get("http://adminmesuji.embuncode.com/api/image-gallery?instansi_id=8&per_page=3")
      .then(function (response) {
        SetData(response.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }
  return (
    <>
      {GetData != null ? (
        <div className="wrapper-card">
          {GetData &&
            GetData.map((item, index) => {
              return (
                <div className="cardPoto">
                  <img className="img" src={item.image_file_data} />
                  <div style={{ padding: "10px" }}>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Poto;
