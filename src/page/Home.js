import React from "react";
import Banner from "../component/Carousel";
import Navigationbar from "../component/Navbar";
import "../css/Home.css";
import "../css/News.css";
import { Container } from "react-bootstrap";
import News from "../component/News";
import Artikel from "../component/Artikel";
import ListKategoriNews from "../component/ListKategoriNews";
import ListKategoriArtikel from "../component/ListKategoriArticle";
import Footer from "../component/Footer";
const Home = () => {
  return (
    <>
      <marquee>Website Lampung Timur</marquee>
      <div>
        <Navigationbar />
      </div>
      <div>
        <Banner />
      </div>

      {/* KONTENT */}
      <div className="bg-news">
        <Container>
          <h1> BERITA TERBARU</h1>
          <h4>Informasi Teraktual</h4>
          <div><ListKategoriNews/></div>
          <div>
            <News />
          </div>
          <h1> ARTIKEL TERBARU</h1>
          <h4>Informasi Teraktual</h4>
          <div><ListKategoriArtikel/></div>
          <div>
            <Artikel />
          </div>
          {/* <h1> GELERI FOTO </h1>
          <h4>Informasi Dalam Rekaman Lensa</h4> */}
          {/* <div>
            <Poto />
          </div> */}
        </Container>
        <div>
          <Footer/>
        </div>
      </div>
      {/* END KONTENT */}
    </>
  );
};

export default Home;
