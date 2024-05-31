import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";

const CardProduct = ({ prod }) => {
  return (
    <div className="bg-[#F6F6F6] px-4 py-4 rounded-md">
      <div className="flex justify-end ">
        <CiHeart size={20} color="red" />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          src={prod.image}
          width={200}
          height={200}
          alt="image"
          className="w-[100px] md:w-[250px]"
        />
        <p className="text-center">{prod.name}</p>
        <p className="text-center font-semibold">${prod.price}</p>
        <button className="bg-black px-4 py-2 text-white rounded-md">
          View Detail
        </button>
      </div>
    </div>
  );
};

export default CardProduct;
