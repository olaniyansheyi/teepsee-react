import React from "react";
import Heart from "@/img/icons/Heart.svg";

import { useNavigate } from "react-router-dom";

const ProductContainer = ({ productInfo, containerClass }) => {
  const navigate = useNavigate();

  const handleNavigateToProduct = (productId) => {
    navigate(`/products/${productId}`);
  };

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };

  return (
    <div className="flex justify-center lg:items-start items-center flex-wrap md:justify-center my-3 w-full  gap-5">
      {productInfo.map((product) => (
        <div
          key={product.id}
          onClick={() => handleNavigateToProduct(product.id)}
          className={`text-secondary w-[45%] md:w-[40%] lg:w-[21%] h-[280px] rounded-lg py-5 sm:px-8 px-2 relative cursor-pointer bg-white ${containerClass}`}
        >
          <div className="h-[50%] border-b-[#666666] border-b-[1px] flex justify-center items-center p-4">
            <img className="max-h-[5rem]" src={product.image} />
          </div>
          <div className="flex justify-between items-start w-full my-3 flex-col">
            <span className="flex justify-start items-start flex-col">
              <h1 className="text-md font-semibold">
                {" "}
                {truncateTitle(product.title, 15)}{" "}
              </h1>
              <p className="text-[#666666]">{product.category}</p>
            </span>
            <h2 className="font-semibold text-md">#{product.price}</h2>
          </div>
          <div className="w-[25px] absolute top-3 right-4">
            <img src={Heart} alt="Favorite icon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductContainer;
