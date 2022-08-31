import React from "react";
import "../css/Footer.css";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { AiTwotoneMail, AiFillFacebook } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <div className="all-footer">
        <div className="footer">
          <div className="tentang-kami">
            <h5>Tentang Kami</h5>
            Kabupaten Lampung Timur (Aksara Lampung: Lamtim.png) atau sering
            disingkat LAMTIM adalah salah satu kabupaten yang terletak di
            provinsi Lampung, Indonesia. Ibu kota kabupaten ini berada di
            kecamatan Sukadana. Kabupaten Lampung Timur memiliki luas wilayah
            5.325,03 km² dan jumlah penduduk sebanyak 1.101.977 jiwa (2021).[4]
            Kabupaten ini memiliki semboyan "Bumei Tuwah Bepadan". Sebelumnya,
            kabupaten Lampung Timur bagian dari Kabupaten Lampung Tengah.
          </div>
          <div>
            <h5 style={{paddingTop:"10px"}}>Kontak Kami</h5>
            <div className="kontak-kami">
              <div>
                <div>
                  <BsWhatsapp size={25} />
                </div>
                <div>
                  <AiTwotoneMail size={25} />
                </div>
                <div>
                  <BsTelephone size={25} />
                </div>
                <div>
                  <AiFillFacebook size={25} />
                </div>
              </div>
              <div style={{paddingLeft:"20px"}}>
                <div>Whatsapp</div>
                <div>Email</div>
                <div>Telephone</div>
                <div>Facebook</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
