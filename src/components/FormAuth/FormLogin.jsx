"use client";
import React, { useState } from "react";
import { FaLock } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import schemaLogin from "./shema";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schemaLogin) });
  const router = useRouter();

  const [messageReq, setMessageReq] = useState(null);

  const submit = async (user) => {
    try {
      const resp = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await resp.json();
      if (resp.status === 401) {
        setMessageReq(data.message);
        console.log(data);
      } else {
        router.push("/home"); // Redirecciona al usuario a la página principal
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[300px] h-auto ">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-4">
        <div className="w-full relative ">
          <MdOutlineMailOutline
            className="absolute top-[18px] left-4"
            size={15}
            color="gray"
          />
          <input
            {...register("email")}
            name="email"
            type="email"
            placeholder="Email Adress"
            className="rounded-full border w-full border-gray-200 px-10 py-[12px]"
          />
          {errors.email?.message && (
            <p className="text-[13px] mt-2 text-red-500">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="w-full relative ">
          <FaLock
            className="absolute top-[18px] left-4"
            size={15}
            color="gray"
          />
          <input
            {...register("password")}
            name="password"
            type="password"
            placeholder="Password"
            className="rounded-full border w-full border-gray-200 px-10 py-[12px]"
          />
          {errors.password?.message && (
            <p className="text-[13px] mt-2 text-red-500">
              {errors.password?.message}
            </p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <p className="text-red-400 text-[14px]">{messageReq}</p>
        </div>
        <button
          type="submit"
          className="bg-[#0575E6] text-white font-light text-sm px-4 py-3 rounded-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};
export default FormLogin;
