import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Loader from "../component/Loader";
import Navigationbar from "../component/Navbar";
import { videoList } from "../util/Api";

const PageVideo = () => {
  const [Video, SetVideo] = useState();
  useEffect(() => {
    GetVideo();
  });

  function GetVideo() {
    const axios = require("axios");
    axios
      .get(videoList)
      .then(function (response) {
        SetVideo(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }

  return (
    <>
      <div style={{paddingBottom:"430px"}}>
        {Video == null ? (
          <Loader />
        ) : Video != null ? (
          <Container>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h2>TIDAK ADA VIDEO</h2>
            </div>
          </Container>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default PageVideo;
