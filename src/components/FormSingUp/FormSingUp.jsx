"use client";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import schemaSignUp from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSingUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schemaSignUp) });
  const router = useRouter();

  const submit = async (data) => {
    try {
      const res = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        console.log("error al registrar usuario");
      }

      if (res.status === 409) {
        console.log("usuario ya registrado");
      } else {
        router.push("/home");
        console.log("usuario registrado correctamente");
      }
    } catch (error) {
      console.log({ message: error });
    }
    console.log(data);
  };

  return (
    <div className="w-[300px] h-auto ">
      <form
        onSubmit={handleSubmit(submit)}
        action=""
        className="flex flex-col gap-4"
      >
        <div className="w-full relative ">
          <FaUser
            className="absolute top-[18px] left-4"
            size={15}
            color="gray"
          />
          <input
            {...register("name")}
            name="name"
            type="text"
            placeholder="Name"
            className="rounded-full border w-full border-gray-200 px-10 py-[12px]"
          />
          {errors.name?.message && (
            <p className="text-[13px] mt-2 text-red-500">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="w-full relative ">
          <FaUser
            className="absolute top-[18px] left-4"
            size={15}
            color="gray"
          />
          <input
            {...register("lastname")}
            name="lastname"
            type="text"
            placeholder="Last Name"
            className="rounded-full border w-full border-gray-200 px-10 py-[12px]"
          />
          {errors.lastname?.message && (
            <p className="text-[13px] mt-2 text-red-500">
              {errors.lastname?.message}
            </p>
          )}
        </div>
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

export default FormSingUp;
