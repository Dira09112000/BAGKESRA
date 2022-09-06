import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { articlePerPage } from "../util/Api";
import { newsPerPage } from "../util/Api";
import { Carousel, Container } from "react-bootstrap";
import Navigationbar from "../component/Navbar";
import Loader from "../component/Loader";
import "../css/News.css";
import "../css/Home.css";
import Footer from "../component/Footer";

const Beranda = () => {
  const [Banner, SetBanner] = useState();
  const [Artikel, SetArtikel] = useState();
  const [Berita, SetBerita] = useState();

  useEffect(() => {
    GetBanner();
    GetArtikel();
    GetBerita();
  }, []);

  function GetBanner() {
    const axios = require("axios");
    axios
      .get(newsPerPage + 3)
      .then(function (response) {
        SetBanner(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }

  function GetArtikel() {
    const axios = require("axios");
    axios
      .get(articlePerPage + 3)
      .then(function (response) {
        SetArtikel(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }

  function GetBerita() {
    const axios = require("axios");
    axios
      .get(newsPerPage + 3)
      .then(function (response) {
        SetBerita(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }

  return (
    <>
      <marquee>Website Tulang Bawang</marquee>
      <div>
        <Navigationbar />
      </div>

      {Berita == null || Artikel == null || Banner == null ? (
        <Loader />
      ) : Banner != null ? (
        <div>
          <Carousel>
            {Banner &&
              Banner.map((item, index) => {
                return (
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={item.image_file_data}
                      alt="First slide"
                      height={550}
                    />
                    <Carousel.Caption>
                      <h2>{item.title}</h2>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
          </Carousel>
          <Container>
            <h1> BERITA TERBARU</h1>
            <h4>Informasi Teraktual</h4>
            <div className="wrapper-card">
              {Berita &&
                Berita.map((item, index) => {
                  return (
                    <a href={`/DetailBerita/${item.id}`}>
                      <div className="card">
                        <img className="img" src={item.image_file_data} />
                        <div style={{ padding: "10px" }}>
                          <div
                            style={{
                              fontWeight: "bold",
                              paddingBottom: "20px",
                            }}
                          >
                            {item.title}
                          </div>
                          <p>{item.intro}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
            </div>

            <h1> ARTIKEL TERBARU</h1>
            <h4>Informasi Teraktual</h4>
            <div className="wrapper-card">
              {Artikel &&
                Artikel.map((item, index) => {
                  return (
                    <a href={`/DetailArtikel/${item.id}`}>
                      <div className="card">
                        <img className="img" src={item.image_file_data} />
                        <div style={{ padding: "10px" }}>
                          <div
                            style={{
                              fontWeight: "bold",
                              paddingBottom: "20px",
                            }}
                          >
                            {item.title}
                          </div>
                          <p>{item.intro}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
            </div>
          </Container>
        </div>
      ) : (
        ""
      )}
      <div><Footer/></div>
    </>
  );
};

export default Beranda;
