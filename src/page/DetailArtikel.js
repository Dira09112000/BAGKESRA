import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailArticle, detailNews } from "../util/Api";
import Navigationbar from "../component/Navbar";
import { Container } from "react-bootstrap";
import "../css/News.css";
import Footer from "../component/Footer";
import ListKategoriNews from "../component/ListKategoriNews";
import Loader from "../component/Loader";
const DetailArtikel = () => {
  const [DataShowArtikel, setDataShowArtikel] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getShowArtikel();
  }, []);

  function getShowArtikel() {
    const axios = require("axios");
    axios
      .get(detailArticle + id)
      .then(function (response) {
        setDataShowArtikel(response.data.data);
        console.log(response.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }

  return (
    <>
      <marquee>Tulang Bawang</marquee>
      <div>
        <Navigationbar />
      </div>

      <Container>
        {DataShowArtikel == null ? (
          <Loader />
        ) : (
          <div className="flex">
            {DataShowArtikel != null ? (
              <div className="wrapper-detail-news">
                <div style={{ fontWeight: "bold", fontSize: "20px" }}>
                  {DataShowArtikel.title}
                </div>
                <img
                  src={DataShowArtikel.image_file_data}
                  className="img-detail-news"
                />
                <div className="content-detail-news">
                  {DataShowArtikel.content}
                </div>
              </div>
            ) : (
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
                  KATEGORI ARTIKEL
                </div>
                <div>
                  <ListKategoriNews />
                </div>
              </div>
            )}
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default DetailArtikel;
