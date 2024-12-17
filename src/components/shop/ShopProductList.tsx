import React from "react";
import ProductCard from "./ShopProductCard";
import { Product } from "./ShopProduct";

const products: Product[] = [
  {
    id: 1,
    image: "../../../public/images/Helmets/Stilo ST5 FN Composite Helmet.png",
    name: "STILO ST5 FN COMPOSITE HELMET",
    sizes: ["L", "M", "S", "XL", "XS", "XXL"],
    price: "999.00",
    stock: "",
  },
  {
    id: 2,
    image: "../../../public/images/Helmets/Stilo ST5 FN CMR Helmet.png", 
    name: "STILO ST5 FN CMR HELMET",
    sizes: ["L", "M", "S", "XS"],
    price: "999.00",
    stock: "",
  },
  {
    id: 3,
    image: "../../../public/images/Helmets/Stilo ST5 FN Carbon Helmet.png", 
    name: "STILO ST5 FN CARBON HELMET",
    sizes: ["L", "M", "S", "XL", "XS", "XXL"],
    price: "999.00",
    stock: "",
  },
  {
    id: 4,
    image: "../../../public/images/Helmets/Stilo ST5 FN 8860 Helmet.png", 
    name: "Stilo ST5 FN 8860 Helmet",
    sizes: ["L", "M", "S", "XL", "XS", "XXL"],
    price: "999.00",
    stock: "",
  },
  {
    id: 5,
    image: "../../../public/images/Helmets/Arai SK6.png", 
    name: "Arai SK6",
    sizes: ["L", "M", "S", "XS"],
    price: "999.00",
    stock: "OUT OF STOCK",
  },
  {
    id: 6,
    image: "../../../public/images/Helmets/Arai GP7 SRC.jpg", 
    name: "Arai GP7 SRC",
    sizes: ["L", "M", "S", "XL", "XS", "XXL"],
    price: "999.00",
    stock: "",
  },
  {
    id: 7,
    image: "../../../public/images/Helmets/Arai GP7 FRP.jpg", 
    name: "Arai GP7 FRP",
    sizes: ["L", "M", "S", "XS"],
    price: "999.00",
    stock: "OUT OF STOCK",
  },
  {
    id: 8,
    image: "../../../public/images/Helmets/Arai GP6S.png", 
    name: "Arai GP6S",
    sizes: ["L", "M", "S", "XL", "XS", "XXL"],
    price: "999.00",
    stock: "",
  },
  {
    id: 9,
    image: "../../../public/images/Helmets/Arai CK6 Helmet.jpg", 
    name: "Arai CK6 Helmet",
    sizes: ["L", "M", "S", "XL", "XS", "XXL"],
    price: "999.00",
    stock: "",
  },
];

const ShopProductList: React.FC = () => {
  return (
    <div id="shop" className="ml-16 py-8 mt-20">
         
      <h2 className="text-center text-3xl text-white mb-8">
        SHOP
      </h2>
      <div className="flex flex-wrap px-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ShopProductList;
