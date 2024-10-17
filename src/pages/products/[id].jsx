import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "@/contexts/ProductsContext";
import { useCart } from "@/contexts/CartContext";
import Spinner from "@/components/Spinner";
import RecentProductList from "@/components/RecentProductList";
import starActive from "@/img/starActive.png";

const Product = () => {
  const { id } = useParams();
  const { fetchProductById } = useProducts();
  const { handleAddToCart, handleDeleteFromCart, isInCart } = useCart();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      const fetchedProduct = await fetchProductById(id);
      setProduct(fetchedProduct);
      setIsLoading(false);
    };

    fetchProduct();
  }, [id, fetchProductById]);

  function handleCartAction(productId, product) {
    if (isInCart(productId)) {
      handleDeleteFromCart(productId);
    } else {
      handleAddToCart(product);
    }
  }

  const truncateTitle = (title, maxLength) => {
    return title.length > maxLength
      ? title.substring(0, maxLength) + "..."
      : title;
  };
  if (isLoading) {
    return <Spinner />;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="mt-5 mb-10 px-4 sm:px-8">
      <div className="w-full flex text-secondary gap-5 justify-center items-center flex-wrap">
        <div className="bg-white flex justify-center items-center rounded-lg sm:h-[500px] h-[350px] w-full md:w-[48%]">
          <img src={product.image} alt={product.title} className="w-[40%]" />
        </div>

        <div className="bg-white rounded-lg sm:h-[500px] w-full md:w-[48%] p-10 text-left text-secondary tracking-wider flex items-start justify-start gap-y-1 flex-col ">
          <div className=" w-full flex justify-between items-start">
            <h1 className="text-xl font-semibold">
              {truncateTitle(product.title, 45)}
            </h1>
            <div className="space-y-2">
              <div className=" flex gap-x-1 items-center justify-center">
                {[...Array(5)].map((_, index) => (
                  <img key={index} src={starActive} alt={`star-${index + 1}`} />
                ))}
              </div>
              <p className="gray-white-text">200 Ratings</p>
            </div>
          </div>
          <h2 className="text-2xl font-semibold">
            # {product.price.toFixed(2)}
          </h2>
          <p className="text-xs gray-white-text">Quantity</p>
          <div>2</div>
          <h1 className="text-md font-semibold mt-1">Product description</h1>
          <p className="text-[#666666]"> {truncateTitle(product.title, 35)}</p>
          <div className="mt-3 flex flex-wrap w-full gap-2 justify-center lg:justify-start items-center text-white">
            <button
              onClick={() => {
                handleCartAction(product.id, product);
              }}
              className="rounded-lg py-2 w-full  lg:w-[60%] bg-secondary"
            >
              {isInCart(product.id) ? "Remove From Cart" : "Add To Cart"}
            </button>
            <button className="rounded-lg py-2  lg:w-[60%]  bg-primary flex justify-center items-center whitespace-nowrap w-full">
              Checkout Now
            </button>
          </div>
        </div>
      </div>
      <RecentProductList />
    </div>
  );
};

export default Product;
