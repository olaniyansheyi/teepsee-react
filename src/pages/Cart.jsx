import React from "react";
import { useCart } from "@/contexts/CartContext";

import { useMenu } from "@/contexts/MenuContext";
import cancel from "@/img/cancel.png";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const {
    cart,
    handleDeleteFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPriceCost,
  } = useCart();

  const { handleToggleShowCheckoutModal } = useMenu();

  const handleCheckAuth = () => {
    handleToggleShowCheckoutModal();
  };

  return (
    <div className="mb-10 px-4 sm:px-8 text-secondary tracking-wider">
      {cart.length !== 0 ? (
        <>
          <h1 className="my-5 text-2xl">Cart</h1>
          <div className="flex flex-wrap justify-center items-start w-full gap-5 mb-5">
            <div className="rounded-xl bg-white sm:w-full lg:w-[60%] px-4 sm:block hidden flex-col gap-y-4 pb-8">
              <div className="flex justify-between items-start w-full py-5 border-b-2 border-b-[#e6e3e3] text-md">
                <h1>Product Image & Item Name</h1>
                <h1>Price</h1>
                <h1>Quantity</h1>
                <h1>Sub-total</h1>
                <h1>Remove</h1>
              </div>
              {cart.map((item) => (
                <div
                  className="flex justify-between items-center w-full mt-5 border-b-2 border-b-[#e6e3e3]"
                  key={item.id}
                >
                  <div className="flex gap-x-2 pb-5">
                    <div className="bg-[#e6e3e3] flex justify-center items-center h-[80px] w-[90px] rounded-lg">
                      <img
                        src={item.image}
                        alt=""
                        className="w-[80%] h-[90%] cursor-pointer"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start font-semibold">
                      <p>{item.name}</p>
                      <p>{item.category}</p>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">#{item.price}</h2>
                  </div>
                  <div className="flex justify-center items-center flex-col">
                    <h2 className="text-xl font-semibold">{item.quantity}</h2>
                    <div className="mt-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="ps-4 pe-5 border-[1px] rounded-s-md border-[#666666]"
                      >
                        -
                      </button>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="ps-4 pe-5 border-[1px] rounded-e-md border-[#666666] border-s-0"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold">
                      #{item.quantity * item.price}
                    </h2>
                  </div>
                  <div onClick={() => handleDeleteFromCart(item.id)}>
                    <img
                      className="w-[1rem] me-4 cursor-pointer"
                      src={cancel}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="sm:hidden bg-white rounded-xl p-6 flex flex-col gap-y-5 w-full">
              {cart.map((item) => (
                <div
                  className="flex gap-x-4 pb-5 w-full border-b-2 border-b-[#e6e3e3] relative"
                  key={item.id}
                >
                  <img
                    src={cancel}
                    alt=""
                    className="w-[18px] cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => handleDeleteFromCart(item.id)}
                  />
                  <div className="bg-[#e6e3e3] flex justify-center items-center h-[120px] w-[50%] rounded-lg">
                    <img src={item.image} alt="" className="w-[90%] h-[90%]" />
                  </div>

                  <div className="flex flex-col justify-start items-start font-semibold w-full">
                    <h1>{item.name}</h1>
                    <p className="text-md font-semibold">
                      #{item.price * item.quantity}
                    </p>
                    <p>Qty: {item.quantity}</p>
                    <div className="mt-3">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="ps-4 pe-5 border-[1px] rounded-s-md border-[#666666]"
                      >
                        -
                      </button>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="ps-4 pe-5 border-[1px] rounded-e-md border-[#666666] border-s-0"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white rounded-xl lg:w-[33%] md:w-full w-full flex flex-col gap-y-5 text-left text-secondary p-6">
              <h1 className="text-2xl">Summary</h1>
              <div className="border-y-2 border-y-[#e6e3e3]">
                <div className="pt-4 pb-7 flex flex-col justify-center items-center gap-y-4">
                  <span className="flex items-center justify-between w-full">
                    <p>Subtotal</p>
                    <p className="font-semibold text-md">
                      #{totalPriceCost}.00
                    </p>
                  </span>
                  <span className="flex items-center justify-between w-full">
                    <p>Delivery Fee</p>
                    <p className="font-semibold text-md">#2,000.00</p>
                  </span>
                  <span className="flex items-center justify-between w-full">
                    <p className="font-semibold">Total</p>
                    <p className="font-semibold text-md">
                      #{totalPriceCost + 2000}.00
                    </p>
                  </span>
                </div>
              </div>
              <div className="w-[80%] flex justify-center sm:justify-start items-center mt-3 mx-auto sm:mx-0">
                <input
                  type="text"
                  placeholder="Your discount code"
                  className="outline-none py-2 px-5 rounded-s-lg border-[#e6e3e3] border-2 border-e-0"
                />
                <button className="p-[10px] px-6 text-md font-semibold rounded-e-lg bg-primary text-secondary">
                  APPLY
                </button>
              </div>

              <button
                onClick={handleCheckAuth}
                className="sm:w-[80%] w-full mx-auto text-center bg-secondary text-white font-semibold rounded-lg py-2 mt-8 sm:mx-0 "
              >
                Checkout
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="w-[90%] md:w-[60%] mx-auto bg-white rounded-xl px-6 py-10 text-center flex justify-center items-center gap-y-4 z-40 my-20 flex-col">
          <h1 className="text-lg tracking-wide">
            Hey, you have no item in your cart
          </h1>
          <NavLink
            to="/categories/all"
            className="py-4 px-8 rounded-lg outline-none bg-secondary text-white font-semibold"
          >
            Explore our drinks now!
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
