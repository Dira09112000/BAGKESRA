import React from "react";
import { useState, useEffect } from "react";
import "../css/Home.css";
const ListKategoriArtikel = () => {
  const [GetData, SetData] = useState(null);
  useEffect(() => {
    getList();
    return () => {
      SetData(null);
    };
  }, []);

  function getList() {
    const axios = require("axios");
    axios
      .get("http://adminmesuji.embuncode.com/api/article/categories/8")
      .then(function (response) {
        SetData(response.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }
  return (
    <>
      {GetData != null ? (
        <div className="wraper-list-kategori">
          {GetData &&
            GetData.map((item, index) => {
              return <div className="list-kategori">{item.nama_kategori}</div>;
            })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ListKategoriArtikel;
