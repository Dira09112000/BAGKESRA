import React from "react";
import { useState, useEffect } from "react";
import "../css/News.css";
const News = () => {
  const [GetData, SetData] = useState(null);
  useEffect(() => {
    getNews();
    return () => {
      SetData(null);
    };
  }, []);

  function getNews() {
    const axios = require("axios");
    axios
      .get("http://adminmesuji.embuncode.com/api/news?instansi_id=8&per_page=3")
      .then(function (response) {
        SetData(response.data.data.data);
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
                <div className="card">
                  <img className="img" src={item.image_file_data} />
                  <div style={{ padding: "10px" }}>
                    <h5>{item.title}</h5>
                    <p>{item.intro}</p>
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

export default News;
