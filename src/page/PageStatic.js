import React from "react";
import Navigationbar from "../component/Navbar";
import { useEffect, useState } from "react";
import { statisPage } from "../util/Api";
import { Container } from "react-bootstrap";
import "../css/Static.css";
import Footer from "../component/Footer";
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
        SetData(response.data.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }
  console.log(GetData);
  return (
    <>
      <marquee behavior="" direction="">
        Tulang Bawang
      </marquee>
      <div>
        <Navigationbar />
      </div>

      {GetData != null ? (
        <Container>
          <div className="wrapper-all">
            {GetData &&
              GetData.map((items, index) => {
                return <h3>{items.title}</h3>;
              })}
          </div>
        </Container>
      ) : (
        ""
      )}
      <div><Footer/></div>
    </>
  );
};

export default PageStatic;
