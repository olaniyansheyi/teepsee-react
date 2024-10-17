import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "@/contexts/ProductsContext";
import ProductContainer from "@/components/ProductContainer";

const SearchResult = () => {
  const { query } = useParams();
  const { searchProducts, isLoading } = useProducts();

  const [searchedProductsState, setSearchedProductsState] = useState([]);

  useEffect(() => {
    const fetchSearchedProducts = async () => {
      if (query) {
        try {
          const data = await searchProducts(query);
          setSearchedProductsState(data || []);
        } catch (err) {
          setSearchedProductsState([]);
          console.error("Error fetching products:", err);
        }
      }
    };

    fetchSearchedProducts();
  }, [query]);

  return (
    <div className="mb-20  mt-10 flex justify-center items-center tracking-wider">
      {isLoading ? (
        <h1 className="mx-auto text-center text-xl">Loading...</h1>
      ) : (
        <>
          {searchedProductsState.length === 0 ? (
            <h1 className="mx-auto text-center text-xl">
              No product found for your search
            </h1>
          ) : (
            <div className="w-full ">
              <ProductContainer productInfo={searchedProductsState} />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SearchResult;
