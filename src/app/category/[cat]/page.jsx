"use client";
import CardProduct from "@/components/CardProduct/CardProduct";
import NavFilter from "@/components/NavFilter/NavFilter";
import { useEffect, useState } from "react";
import getProducts from "./getCategory";

const page = ({ params }) => {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState(null);
  const [brands, setBrands] = useState([]);

  const category = params.cat;

  useEffect(() => {
    getProducts(category, setProducts, setFilter, setBrands);
  }, []);

  const getFilter = (brand) => {
    const filt = products.filter((prod) => prod.name_brand === brand);
    setFilter(filt);
    console.log(filt);
  };

  return (
    <div className="  w-full flex flex-col ">
      <section className=" flex flex-col gap-4 w-[95%] mx-auto">
        <NavFilter />
        {/* <div className="flex flex-col gap-4">
          {brands && (
            <>
              <p onClick={() => getProducts()}>all</p>
              {brands.map((brand) => (
                <div className="">
                  <p onClick={() => getFilter(brand)}>{brand}</p>
                </div>
              ))}
            </>
          )}
        </div> */}
        <p className="text-1xl text-slate-600">
          Products Result:{" "}
          <span className="font-semibold text-black">
            {filter?.length > 0 ? filter.length : "nada"}
          </span>
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {filter?.map((prod) => (
            <CardProduct prod={prod} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
