import Breadcrumb from "components/Breadcrumb";
import ErrorMessage from "parts/ErrorMessage";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <Header theme="black" />
      <ErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}
