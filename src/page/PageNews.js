import React from "react";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/News.css";
import { newsList } from "../util/Api";
import Loader from "../component/Loader";
const PageNews = () => {
  const [News, SetNews] = useState(null);
  const [beritaTerbaru, setBeritaTerbaru] = useState(null);
  useEffect(() => {
    getNews();
    getBeritaTerbaru();
    return () => {
      SetNews(null);
      setBeritaTerbaru(null);
    };
  }, []);
  function getNews() {
    const axios = require("axios");
    axios
      .get(newsList)
      .then(function (response) {
        SetNews(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }

  function getBeritaTerbaru (){
    const axios = require("axios");
    axios
      .get("http://adminmesuji.embuncode.com/api/article?instansi_id=43&slug=berita-terbaru")
      .then(function (response) {
        setBeritaTerbaru(response.data.data.data);
        console.log(response.data.data.data)
      })
      .catch(function (error) {})
      .then(function () {});
  }

  return (
    <>
      <Container>
        <div className="flex">
          {News == null ? (
            <Loader />
          ) : News != null ? (
            <div className="wrapper-page-news">
              <div className="section-left">
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
                {News &&
                  News.map((item, index) => {
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
              <div className="section-right">
                <h2
                  style={{
                    paddingBottom: "20px",
                    paddingTop: "20px",
                    width: "100%",
                  }}
                >
                  BERITA TERBARU
                </h2>
                <div></div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </Container>
    </>
  );
};

export default PageNews;
