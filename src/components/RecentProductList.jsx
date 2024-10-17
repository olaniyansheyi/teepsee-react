import React from "react";
import { useProducts } from "@/contexts/productsContext";
import ProductContainer from "@/components/ProductContainer";

const RecentProuctList = () => {
  const { recentlyViewedProducts } = useProducts();

  return (
    <div className="text-secondary tracking-wider my-8">
      <h1 className="font-semibold text-xl mb-10">Recently Viewed Items</h1>

      {recentlyViewedProducts.length !== 0 ? (
        <div className="flex justify-center lg:items-start items-start gap-5 flex-wrap md:justify-start my-3">
          <ProductContainer productInfo={recentlyViewedProducts} />
        </div>
      ) : (
        <div className="my-10">
          <h2 className="pb-10 text-lg font-semibold tracking-wider text-center">
            You have not viewed any product Yet.
          </h2>
        </div>
      )}
    </div>
  );
};

export default RecentProuctList;
