import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailArticle } from "../util/Api";
import { Container } from "react-bootstrap";
import "../css/News.css";
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
      })
      .catch(function (error) {})
      .then(function () {});
  }

  return (
    <>
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
                  BERITA LAINYA
                </div>
                <div></div>
              </div>
            )}
          </div>
        )}
      </Container>
    </>
  );
};

export default DetailArtikel;
