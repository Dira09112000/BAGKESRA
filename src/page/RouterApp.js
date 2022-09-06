import React from "react";
import { Routes, Route } from "react-router-dom";
import PageNews from "./PageNews";
import PageArticle from "./PageArticle";
import PageDocument from "./PageDocument";
import DetailDocument from "./DetailDocument";
import PagePhoto from "./PagePhoto";
import PageVideo from "./PageVideo";
import PageStatic from "./PageStatic";
import DetailFoto from "./DetailFoto";
import DetailBerita from "./DetailBerita";
import DetailArtikel from "./DetailArtikel";
import Beranda from "./Beranda";
const RouterApp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/News" element={<PageNews />} />
        <Route path="/Article" element={<PageArticle />} />
        <Route path="/Document" element={<PageDocument />} />
        <Route path="/DetailDokumen/:slug" element={<DetailDocument />} />
        <Route path="/DetailFoto/:slug" element={<DetailFoto />} />
        <Route path="/GalleryPhoto" element={<PagePhoto />} />
        <Route path="/GalleryVideo" element={<PageVideo />} />
        <Route path="/StaticPage" element={<PageStatic />} />
        <Route path="/DetailBerita/:id" element={<DetailBerita />} />
        <Route path="/DetailArtikel/:id" element={<DetailArtikel />} />
      </Routes>
    </>
  );
};

export default RouterApp;
