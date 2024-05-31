"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import phoneIcon from "../../images/icons/phone-icon.svg";
import Image from "next/image";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const resp = await fetch(`http://localhost:3001/api/products/categories`);
    const data = await resp.json();
    setCategories(data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className=" py-10 bg-[#FAFAFA] w-full">
      <div className="w-[85%] md:[75%] mx-auto ">
        <section className="flex items-center b  justify-between  py-2">
          <p className="text-2xl">Browse By Category</p>
          <div className="flex items-center">
            <IoIosArrowBack size={30} />
            <IoIosArrowForward size={30} />
          </div>
        </section>
        <section className="grid grid-cols-2  md:grid md:grid-cols-6 gap-4  w-full ">
          {categories?.map((cat) => (
            <>
              <Link href={`/category/${cat.name_categorie}`}>
                <div className="bg-[#EDEDED] flex flex-col justify-center items-center py-8 px-10 rounded-xl shadow-sm md:w-[130px] lg:w-full cursor-pointer hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl">
                  <Image src={phoneIcon} width={50} height={20} alt="icon" />
                  <p> {cat.name_categorie}</p>
                </div>
              </Link>
            </>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Categories;
