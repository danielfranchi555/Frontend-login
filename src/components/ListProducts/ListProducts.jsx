import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import CardProduct from "../CardProduct/CardProduct";

const ListProducts = ({ products }) => {
  console.log({ component: products });
  return (
    <div className="w-[85%] mx-auto">
      <section>
        <span>New Arribal</span>
        <span>Best seller</span>
        <span>Featured Products</span>
      </section>
      <section className="grid grid-cols-2 gap-2 md:grid md:grid-cols-4">
        {products.map((prod) => (
          <CardProduct prod={prod} />
        ))}
      </section>
    </div>
  );
};

export default ListProducts;
