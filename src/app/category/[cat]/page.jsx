"use client";
import { MenuNav } from "@/components/MenuNav/MenuNav";
import Image from "next/image";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [products, setProducts] = useState(null);
  const [filter, setFilter] = useState(null);
  const [brands, setBrands] = useState([]);

  const category = params.cat;

  const getProducts = async () => {
    const resp = await fetch(
      `http://localhost:3001/api/products/category/${category}`
    );
    const data = await resp.json();
    const brandsNoRepeat = [...new Set(data.map((prod) => prod.name_brand))];
    console.log(data);
    setProducts(data);
    setFilter(data);
    setBrands(brandsNoRepeat);
  };

  const getProCat = async (category, brand) => {
    const resp = await fetch(
      `http://localhost:3001/api/products/filter/${category}/${brand}`
    );
    const data = await resp.json();
    console.log(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const getFilter = (brand) => {
    const filt = products.filter((prod) => prod.name_brand === brand);
    setFilter(filt);
    console.log(filt);
  };

  console.log(brands);
  console.log(products);

  return (
    <div className="  w-full flex flex-col ">
      <div className=" w-[95%] h-full mx-auto flex justify-center items-center py-4">
        <MenuNav />
      </div>
      <section className="bg-red-100 flex gap-4 w-[95%]">
        <div className="flex flex-col gap-4">
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
        </div>

        {filter?.map((item) => (
          <div className="w-[200px] h-[200px] bg-green-500">
            <Image src={item.image} width={100} height={100} alt="image" />
            <div>{item.price}</div>
            <button>View Product</button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
