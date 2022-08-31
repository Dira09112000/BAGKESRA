import React from "react";
import NavigationBar from "../component/Navbar";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/News.css";
import Footer from "../component/Footer";
import { Link } from "react-router-dom";
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
      .get("http://adminmesuji.embuncode.com/api/news?instansi_id=8")
      .then(function (response) {
        SetData(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }
  return (
    <>
      <marquee>Lampung Timur</marquee>
      <div>
        <NavigationBar />
      </div>
      <Container>
        <h2>Berita</h2>
      {GetData != null ? (
        <div className="wrapper-page-news">
          {GetData &&
            GetData.map((item, index) => {
              return (
                <a href={`/DetailNews/${item.id}`}>
                <div className="card-page-news">
                  <img className="img-page-news" src={item.image_file_data} />
                  <div style={{ padding: "10px" }}>
                    <div className="title-page-news">{item.title}</div>
                    <p>{item.intro}</p>
                    <p style={{paddingTop:"20px"}}>{item.created_at}</p>
                  </div>
                </div>
                </a>
              );
            })}
        </div>
      ) : (
        ""
      )}
      </Container>
      <div><Footer/></div>
    </>
  );
};

export default PageNews;
