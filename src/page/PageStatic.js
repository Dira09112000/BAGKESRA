import React from "react";
import Navigationbar from "../component/Navbar";
import { useEffect, useState } from "react";
import { statisPage } from "../util/Api";
import { Container } from "react-bootstrap";
import "../css/Static.css";
import Footer from "../component/Footer";
import Loader from "../component/Loader";
const PageStatic = () => {
  const [GetData, SetData] = useState(null);
  useEffect(() => {
    getStatic();
    return () => {
      SetData(null);
    };
  }, []);
  function getStatic() {
    const axios = require("axios");
    axios
      .get(statisPage)
      .then(function (response) {
        SetData(response.data.data.items);
      })
      .catch(function (error) {})
      .then(function () {});
  }
  console.log(GetData);
  return (
    <>
      {GetData == null ? (
        <Loader />
      ) : GetData != null ? (
        <Container>
          <div style={{paddingBottom:"300px"}}>
            {GetData &&
              GetData.map((item) => {
                return (
                  <>
                    <h2
                      style={{
                        paddingTop: "20px",
                        width: "100%",
                        borderBottom: "solid 5px",
                        marginBottom: "20px",
                      }}
                    >
                      Halaman Statis
                    </h2>
                    <h3 style={{textAlign:"center"}}>{item.title}</h3>
                    <p style={{textAlign:"justify"}}>{item.content}</p>
                  </>
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

export default PageStatic;
