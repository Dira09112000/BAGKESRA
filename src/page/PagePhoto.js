import React from "react";
import { Container } from "react-bootstrap";
import Navigationbar from "../component/Navbar";
import "../css/Gallery.css";
import { imageList } from "../util/Api";
import Loader from "../component/Loader";
import { useEffect, useState } from "react";
const PagePhoto = () => {
  const [DataResponse, setDataResponse] = useState(null);
  useEffect(() => {
    getFoto();
    return () => {
      setDataResponse(null);
    };
  }, []);

  function getFoto() {
    const axios = require("axios");
    axios
      .get(imageList)
      .then(function (response) {
        setDataResponse(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }
  console.log(DataResponse);
  return (
    <>
      <marquee behavior="" direction="">
        Tulang Bawang
      </marquee>
      <div>
        <Navigationbar />
      </div>
      {DataResponse == null ? (
        <Loader />
      ) : DataResponse != null ? (
        <Container>
          <h2 style={{ paddingTop: "20px" }}>GALLERY PHOTO</h2>

          <div className="wrapper-poto">
            {DataResponse &&
              DataResponse.map((index) => {
                return (
                  <a href={`/DetailFoto/${index.slug}`}>
                    <div className="card-poto">
                      <img
                        className="card-poto"
                        src={index.image_gallery_item[0].image_file_data}
                      />
                    </div>
                  </a>
                );
              })}
          </div>
        </Container>
      ) : (
        ""
      )}
    </>
  );
};

export default PagePhoto;
