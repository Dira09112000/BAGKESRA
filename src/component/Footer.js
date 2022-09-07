import React from "react";
import "../css/Footer.css";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { AiTwotoneMail, AiFillFacebook } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { instansi } from "../util/Api";
const Footer = () => {
  const [Instansi, SetInstansi] = useState([]);
  useEffect(() => {
    GetInstansi();
  },[]);

  function GetInstansi() {
    const axios = require("axios");
    axios
      .get(instansi)
      .then(function (response) {
        SetInstansi(response.data.data);
      })
      .catch(function (error) {})
      .then(function () {});
  }
  return (
    <>
      <div className="all-footer">
        <div className="footer">
          <div className="tentang-kami">
            <h5>Tentang Kami</h5>
           {Instansi.tentang}
          </div>
          <div style={{width:"20%", paddingTop:"10px"}}>
            <h5>Alamat</h5>
            <p style={{textAlign:"justify"}}>{Instansi.alamat}</p>
          </div>
          <div>
            <h5 style={{ paddingTop: "10px" }}>Kontak Kami</h5>
            <div className="kontak-kami">
              <div>
                <div>
                  <AiTwotoneMail size={25} />
                </div>
                <div>
                  <BsTelephone size={25} />
                </div>
              </div>
              <div style={{ paddingLeft: "20px" }}>
                <div>{Instansi.email}</div>
                <div>{Instansi.nomor_telepon}</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
