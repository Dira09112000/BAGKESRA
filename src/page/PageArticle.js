import React from "react";
import NavigationBar from "../component/Navbar";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/News.css";
import Footer from "../component/Footer";
import { articleList } from "../util/Api";
import Loader from "../component/Loader";
const PageArticle = () => {
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
      .get(articleList)
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
                ARTIKEL
              </h2>
              {GetData &&
                GetData.map((item, index) => {
                  return (
                    <a
                      href={`/DetailArtikel/${item.id}`}
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
                            href={`/DetailArticle/${item.id}`}
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
          ""
          )}
        </div>
      </Container>
    </>
  );
};

export default PageArticle;
