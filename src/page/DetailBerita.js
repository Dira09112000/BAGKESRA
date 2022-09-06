import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailNews } from "../util/Api";
import Navigationbar from "../component/Navbar";
import { Container } from "react-bootstrap";
import "../css/News.css";
import Loader from "../component/Loader";
import Footer from "../component/Footer";
import ListKategoriNews from "../component/ListKategoriNews";
const DetailBerita = () => {
  const [DataShowBerita, setDataShowBerita] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getShowBerita();
  }, []);

  function getShowBerita() {
    const axios = require("axios");
    axios
      .get(detailNews + id)
      .then(function (response) {
        setDataShowBerita(response.data.data);
        console.log(response.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }
console.log(DataShowBerita)
  return (
    <>
      <marquee>Tulang Bawang</marquee>
      <div>
        <Navigationbar />
      </div>
      {DataShowBerita == null ? (
        <Loader />
      ) : DataShowBerita != null ? (
        <Container>
          <div className="flex">
            <div className="wrapper-detail-news">
              <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                {DataShowBerita.title}
              </div>
              <img
                src={DataShowBerita.image_file_data}
                className="img-detail-news"
              />
              <div className="content-detail-news">
                {DataShowBerita.content}
              </div>
            </div>
            <div
              className="wrapper-detail-news"
              style={{ paddingLeft: "50px" }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "20px",
                  borderBottom: "solid 3px",
                }}
              >
                KATEGORI BERITA
              </div>
              <div>
                <ListKategoriNews />
              </div>
            </div>
          </div>
        </Container>
      ) : (
        ""
      )}
      <Footer />
    </>
  );
};

export default DetailBerita;
