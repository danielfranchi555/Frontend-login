"use client";
import { addToCart } from "@/app/redux/features/cartSlice";
import Count from "@/components/Count/Count";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const page = ({ params }) => {
  const id = params.id;
  const [product, setProduct] = useState(null);
  const count = useSelector((state) => state.count);
  const cart = useSelector((state) => state.cart.products);

  const dispatch = useDispatch();

  const getProduct = async () => {
    const resp = await fetch(
      `http://localhost:3001/api/products/product/${id}`
    );
    const data = await resp.json();
    setProduct(data[0]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    getProduct();
  }, []);

  const addProduct = (prod) => {
    dispatch(addToCart({ ...prod, count }));
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      {product ? (
        <div className="border">
          <Image src={product.image} width={100} height={100} />
          <p> {product.name}</p>
          <button
            onClick={() => addProduct(product)}
            className="bg-blue-400 px-4 py-2 text-white"
          >
            Add to Cart
          </button>
          <Link href={"/cart"}>
            <button className="bg-blue-400 px-4 py-2 text-white">
              go to cart
            </button>
          </Link>
        </div>
      ) : (
        "loading"
      )}
      <Count />
    </div>
  );
};

export default page;
