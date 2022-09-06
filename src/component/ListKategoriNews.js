import React from "react";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { categoryListArticle, categoryListNews } from "../util/Api";
const ListKategoriNews = () => {
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
      .get(categoryListNews)
      .then(function (response) {
        SetData(response.data.data);
        console.log(response.data.data);
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
              return (
                <a href={`/KategoriNews/${item.slug}`}>
                  <div className="list-kategori">{item.nama_kategori}</div>
                </a>
              );
            })}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ListKategoriNews;
