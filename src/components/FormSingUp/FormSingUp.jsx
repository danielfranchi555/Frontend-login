"use client";
import React from "react";
import { FaUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useRouter } from "next/navigation";

const FormSingUp = () => {
  const router = useRouter();

  const Handlesubmit = async (e) => {
    e.preventDefault();
    const { name, lastname, password, email } = e.target;
    const user = {
      name: name.value,
      lastname: lastname.value,
      password: password.value,
      email: email.value,
    };
    try {
      const res = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (!res.ok) {
        console.log("error al registrar usuario");
      }

      if (res.status === 409) {
        console.log("usuario ya registrado");
      } else {
        router.push("/");
        console.log("usuario registrado correctamente");
      }
    } catch (error) {
      console.log({ message: error });
    }
  };

  return (
    <div className="w-[300px] h-auto ">
      <form onSubmit={Handlesubmit} action="" className="flex flex-col gap-4">
        <div className="w-full relative ">
          <FaUser
            className="absolute top-[18px] left-4"
            size={15}
            color="gray"
          />
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="rounded-full border w-full border-gray-200 px-10 py-[12px]"
          />
        </div>
        <div className="w-full relative ">
          <FaUser
            className="absolute top-[18px] left-4"
            size={15}
            color="gray"
          />
          <input
            name="lastname"
            type="text"
            placeholder="Last Name"
            className="rounded-full border w-full border-gray-200 px-10 py-[12px]"
          />
        </div>
        <div className="w-full relative ">
          <MdOutlineMailOutline
            className="absolute top-[18px] left-4"
            size={15}
            color="gray"
          />
          <input
            name="email"
            type="text"
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
            type="text"
            placeholder="Password"
            className="rounded-full border w-full border-gray-200 px-10 py-[12px]"
          />
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
