"use client";
import React from "react";
import { useSelector } from "react-redux";

const page = () => {
  const cart = useSelector((state) => state.cart.products);
  const quantity = useSelector((state) => state.cart.quantity);

  console.log(cart);
  return (
    <div>
      {cart.length > 0
        ? cart.map((prod, index) => (
            <div key={index}>
              <p>{prod.name}</p>
              <p>{prod.count}</p>
            </div>
          ))
        : "no hay nada"}
      <p>quantityTotal : {quantity}</p>
    </div>
  );
};
export default page;
