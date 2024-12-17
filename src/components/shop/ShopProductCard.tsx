import React from "react";
import { Product } from "./ShopProduct";

interface ProductCardProps {
  product: Product;
}

const ShopProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="bg-black overflow-hidden text-white relative group">
        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />

        {/* Sizes Tag */}
        <div>
        {product.stock !== "" && (
            <div className="absolute top-2 left-2 bg-orange-500 px-2 py-1 text-sm ">
              OUT OF STOCK
            </div>
          )}
        <div className="absolute top-2 right-2 bg-gray-800 bg-opacity-80 px-2 py-1 text-sm rounded">
          {product.sizes.join(", ")}
        </div>

        </div>
      

        {/* Product Info */}
        <div className="py-4 grid grid-cols-2">
         <div>
         <h3 className="text-lg mb-2 uppercase">{product.name}</h3>
         <p className="text-white font-bold text-lg mb-4">${product.price}</p>
         </div>
          <button className="border border-orange-500 w-full h-12 lg:text-lg text-sm px-2 py-2  hover:bg-orange-500 hover:text-white transition duration-300">
            SELECT OPTIONS
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopProductCard;
