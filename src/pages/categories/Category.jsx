import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "@/contexts/ProductsContext";
import cancelImage from "@/img/cancel.png";
import ProductsCategoriesUi from "@/components/ProductsCategoriesUi";

const Category = () => {
  const { category } = useParams();
  const {
    currentCategory,
    priceRange,
    fetchProductsByCategory,
    clearProductFilter,
    setCurrentCategory,
    products,
  } = useProducts();

  useEffect(() => {
    if (category === "all") return setCurrentCategory(products);
    if (category) {
      fetchProductsByCategory(category);
    }
  }, [category]);

  return (
    <>
      <div className="w-full flex gap-x-4 text-secondary tracking-wider px-6 mb-3 justify-between sm:justify-between items-start mt-10">
        <h1 className="text-xl capitalize">{category} Category</h1>
        {priceRange.max !== Infinity && (
          <button
            className="text-sm font-semibold bg-white rounded-md outline-none border-[#b1a7a7] border-2 py-2 w-[10rem] flex justify-start items-center px-2 relative"
            onClick={() => {
              clearProductFilter(category);
            }}
          >
            <p className="max-w-[95%]">
              #{priceRange.min} - #{priceRange.max}
            </p>
            <img
              className="absolute right-2"
              src={cancelImage}
              alt="Clear filter"
            />
          </button>
        )}
      </div>

      <div className="my-5 px-6 w-full flex justify-center items-center text-center tracking-wider text-secondary">
        {currentCategory.length === 0 && priceRange.max !== Infinity && (
          <p>
            Sorry! We do not have a product between the price range you entered,
            clear the filter to continue shopping!
          </p>
        )}

        {currentCategory.length === 0 && priceRange.max === Infinity && (
          <p>
            Sorry! Products could not be fetched. Please check your internet
            connection.
          </p>
        )}
      </div>

      <ProductsCategoriesUi currentCategory={currentCategory} />
    </>
  );
};

export default Category;
