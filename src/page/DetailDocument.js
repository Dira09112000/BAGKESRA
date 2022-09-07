import React from "react";
import { Container } from "react-bootstrap";
import Navigationbar from "../component/Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailDocument } from "../util/Api";
import Footer from "../component/Footer";
import "../css/Dokumen.css";
import Loader from "../component/Loader";
const DetailDocument = () => {
  const [GetDokumen, SetDokumen] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    getDokumen();
  }, []);

  function getDokumen() {
    const axios = require("axios");
    axios
      .get(detailDocument + slug)
      .then(function (response) {
        SetDokumen(response.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }

  return (
    <>
      {GetDokumen == null ? (
        <Loader />
      ) : GetDokumen != null ? (
        <Container>
          <div className="wrapper-document">
            <h2>{GetDokumen[0].dokumen_file_name}</h2>
            <div className="detail-document">
              <iframe
                src={
                  "data:application/pdf;base64," +
                  GetDokumen[0].dokumen_file_data
                }
                frameBorder="0"
                title={GetDokumen[0].dokumen_file_data}
                scrolling="auto"
                height="100%"
                width="100%"
              ></iframe>
            </div>
          </div>
        </Container>
      ) : (
        ""
      )}
      
    </>
  );
};

export default DetailDocument;
