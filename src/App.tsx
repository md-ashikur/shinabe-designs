import "./App.css";
import AboutMe from "./components/AboutMe";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import SideNavbar from "./components/SideNavbar";
import InstaPhotos from "./components/InstaPhotos";
import Product from "./components/Product";
import ProductCarousel from "./components/ProductCarousel";
import ShopProductList from "./components/shop/ShopProductList";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#ffa500]">
        <div className="max-w-[1400px] mx-auto bg-black min-h-screen">
          <SideNavbar />
          <AboutMe />
          <Product />
          <ProductCarousel />
          <ShopProductList/>
          <InstaPhotos />
          <FAQ />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
