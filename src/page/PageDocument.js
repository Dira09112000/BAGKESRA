import React from "react";
import Navigationbar from "../component/Navbar";
import { documentList } from "../util/Api";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../css/Dokumen.css";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
const PageDocument = () => {
  const [GetData, SetData] = useState(null);
  useEffect(() => {
    getDokumen();
    return () => {
      SetData(null);
    };
  }, []);

  function getDokumen() {
    const axios = require("axios");
    axios
      .get(documentList)
      .then(function (response) {
        SetData(response.data.data.data);
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

      <div className="flex">
        {GetData == null ? (
          <Loader />
        ) : GetData != null ? (
          <Container>
            <h2
              style={{
                borderBottom: "5px solid",
                paddingBottom: "20px",
                paddingTop: "20px",
                width: "100%",
              }}
            >
              DOCUMENT
            </h2>
            <div className="wrapper-document">
              {GetData &&
                GetData.map((index) => {
                  return (
                    <a href={`/DetailDokumen/${index.slug}`}>
                      <div className="document">
                        {index.dokumen_item[0].dokumen_file_name}
                      </div>
                    </a>
                  );
                })}
            </div>
          </Container>
        ) : (
          ""
        )}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default PageDocument;
