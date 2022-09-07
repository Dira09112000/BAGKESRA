import React from "react";
import NavigationBar from "../component/Navbar";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/News.css";
import Footer from "../component/Footer";
import { newsList } from "../util/Api";
import ListKategoriNews from "../component/ListKategoriNews";
import Loader from "../component/Loader";
const PageNews = () => {
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
      .get(newsList)
      .then(function (response) {
        SetData(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }
  return (
    <>
      <Container>
        <div className="flex">
          {GetData == null ? (
            <Loader />
          ) : GetData != null ? (
            <div className="wrapper-page-news">
              <h2
                style={{
                  borderBottom: "5px solid",
                  paddingBottom: "20px",
                  paddingTop: "20px",
                  width: "50rem",
                }}
              >
                BERITA
              </h2>
              {GetData &&
                GetData.map((item, index) => {
                  return (
                    <a
                      href={`/DetailBerita/${item.id}`}
                      style={{ width: "50rem" }}
                    >
                      <div className="card-page-news">
                        <img
                          className="img-page-news"
                          src={item.image_file_data}
                        />
                        <div style={{ padding: "10px" }}>
                          <div className="title-page-news">{item.title}</div>
                          <p>{item.intro}</p>
                          <a
                            href={`/DetailNews/${item.id}`}
                            style={{
                              display: "flex",
                            }}
                          >
                            <button>Selengkapnya</button>
                          </a>
                        </div>
                      </div>
                    </a>
                  );
                })}
            </div>
          ) : (
            <div>wkwkwk</div>
          )}
        </div>
      </Container>
    </>
  );
};

export default PageNews;
