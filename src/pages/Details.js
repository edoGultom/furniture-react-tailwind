import Clients from "parts/Clients";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import Sitemap from "parts/Sitemap";
import React from "react";
import ProductDetail from "parts/Details/ProductDetail";
import Suggestion from "parts/Details/Suggestion";
export default function Details() {
  return (
    <>
      <Header theme="black" />

      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/9212", name: "Office Room" },
          { url: "/categories/9212/products/788997", name: "Details" },
        ]}
      />
      <ProductDetail />
      <Suggestion />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
