"use client";
import { MenuNav } from "@/components/MenuNav/MenuNav";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const page = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(false);
  const [dataUpdate, setDataUpdate] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
  });

  const getProducts = async () => {
    const resp = await fetch("http://localhost:3001/api/products");
    const data = await resp.json();
    setProducts(data);
  };

  const handleEditUser = (user) => {
    setUpdate(true);
    setSelectedUser(user);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className=" flex flex-col w-[90%]  mx-auto h-[100vh] items-center justify-center gap-4">
      <MenuNav />
      {/* <div className="">
        <ul className="flex gap-4">
          {categories.map((cat) => (
            <>
              <Link href={`/category/${cat}`}>
                <li className="cursor-pointer hover:bg-gray-400">{cat}</li>
              </Link>
            </>
          ))}
          <li
            className="cursor-pointer hover:bg-slate-400"
            onClick={() => getProducts()}
          >
            Todos
          </li>
        </ul>
      </div> */}
      <div className="w-[100%] grid grid-cols-4 bg-red-500">
        {products.map((prod) => (
          <div className="border flex flex-col gap-2 w-[200px]">
            <div className="bg-blue-300 flex items-center justify-center">
              <Image src={prod.image} width={100} height={100} alt="image" />
            </div>
            <p className="text-[13px] h-[30px]">{prod.name}</p>
            <p>${prod.price}</p>
            <Link href={`/detail/${prod.id_product}`}>View Product</Link>
          </div>
        ))}
      </div>
      {/* <div className="w-[40%]">
        <Form
          dataUpdate={dataUpdate}
          update={update}
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          setUpdate={setUpdate}
          getUser={getUser}
        />
      </div> */}
    </main>
  );
};

export default page;
