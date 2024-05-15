"use client";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { useRouter } from "next/navigation";

const FormLogin = () => {
  const router = useRouter();
  const [messageReq, setMessageReq] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    const user = { email: email.value, password: password.value };
    console.log("Submitting form with user:", user); // Verifica que se esté capturando correctamente el usuario

    try {
      const resp = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      if (resp.status === 401) {
        // Si la respuesta es exitosa (código 2xx)
        setMessageReq(data);
      } else {
        router.push("/"); // Redirecciona al usuario a la página principal
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[300px] h-auto ">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="w-full relative ">
          <MdOutlineMailOutline
            className="absolute top-[18px] left-4"
            size={15}
            color="gray"
          />
          <input
            name="email"
            type="email"
            placeholder="Email Adress"
            className="rounded-full border w-full border-gray-200 px-10 py-[12px]"
          />
        </div>
        <div className="w-full relative ">
          <FaLock
            className="absolute top-[18px] left-4"
            size={15}
            color="gray"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="rounded-full border w-full border-gray-200 px-10 py-[12px]"
          />
        </div>
        <div className="flex items-center justify-center">
          <p className="text-red-400 text-[14px]">{messageReq}</p>
        </div>
        <button
          type="submit"
          className="bg-[#0575E6] text-white font-light text-sm px-4 py-3 rounded-full"
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default FormLogin;
