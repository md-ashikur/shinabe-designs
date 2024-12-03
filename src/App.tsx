import "./App.css";
import AboutMe from "./components/AboutMe";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InstaPhotos from "./components/InstaPhotos";
import Product from "./components/Product";
import ProductCarousel from "./components/ProductCarousel";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <div className="max-w-7xl mx-auto bg-black min-h-screen">
          <Hero />
          <AboutMe />
          <Product />
          <ProductCarousel />
          <InstaPhotos />
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
