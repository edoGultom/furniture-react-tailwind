import Breadcrumb from "components/Breadcrumb";
import useScrrolltoTop from "helpers/hooks/useScrrolltoTop";
import ErrorMessage from "parts/ErrorMessage";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useScrrolltoTop(); //kapan pun pindah halaman posisi akan selalu dipaling atas
  return (
    <>
      <Header theme="black" />
      <ErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}
