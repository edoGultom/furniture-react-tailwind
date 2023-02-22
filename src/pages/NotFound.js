import Document from "parts/Document";
import ErrorMessage from "parts/ErrorMessage";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";

export default function NotFound() {
  return (
    <Document>
      <Header theme="black" />
      <ErrorMessage />
      <Sitemap />
      <Footer />
    </Document>
  );
}
