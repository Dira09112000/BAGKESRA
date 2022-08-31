import React from "react";
import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
const Banner = () => {
  const [GetData, SetData] = useState(null);
  useEffect(() => {
    getBanner();
    return () => {
      SetData(null);
    };
  }, []);

  function getBanner() {
    const axios = require("axios");
    axios
      .get("http://adminmesuji.embuncode.com/api/news?instansi_id=8&per_page=3")
      .then(function (response) {
        SetData(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }

  return (
    <>
      {GetData != null ? (
        <Carousel>
          {GetData &&
            GetData.map((item, index) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={item.image_file_data}
                    alt="First slide"
                    height={500}
                  />
                  <Carousel.Caption>
                    <h2>{item.title}</h2>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
        </Carousel>
      ) : (
        ""
      )}
    </>
  );
};

export default Banner;
