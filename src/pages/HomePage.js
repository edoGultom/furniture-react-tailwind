import Clients from "parts/Clients";
import Document from "parts/Document";
import Footer from "parts/Footer";
import Header from "parts/Header";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import Hero from "parts/HomePage/Hero";
import JustArrived from "parts/HomePage/JustArrived";
import Sitemap from "parts/Sitemap";

export default function HomePage() {
  return (
    // pembungkus component wrapper yang terdapat didalamnya (modal, scroll dan lain-lain) <Document>
    <Document>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </Document>
  );
}
