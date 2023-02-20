import React from "react";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import Footer from "parts/Footer";
import Sitemap from "parts/Sitemap";
import ShoppingCart from "parts/Cart/ShoppingCart";
import ShippingDetail from "parts/Cart/ShippingDetail";
import useScrrolltoTop from "helpers/hooks/useScrrolltoTop";

export default function Cart() {
  useScrrolltoTop(); //kapan pun pindah halaman posisi akan selalu dipaling atas
  return (
    <>
      <Header theme="black" />

      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetail />
          </div>
        </div>
      </section>

      <Sitemap />
      <Footer />
    </>
  );
}
