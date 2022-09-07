import React from "react";
import { Container } from "react-bootstrap";
import Navigationbar from "../component/Navbar";
import { useState, useEffect } from "react";
import { imageList } from "../util/Api";
import Loader from "../component/Loader";
const DetailFoto = () => {
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
  return (
    <>
      {DataResponse == null ? (
        <Loader />
      ) : DataResponse != null ? (
        <Container>
          <div className="wrapper-poto">
            {DataResponse &&
              DataResponse.map((index) => {
                return (
                  <div className="card-poto">
                    <img className="card-poto" src={index.image_file_data} />
                  </div>
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

export default DetailFoto;
