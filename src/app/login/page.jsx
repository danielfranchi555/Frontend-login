import FormLogin from "@/components/FormAuth/FormLogin";
import React from "react";

const page = () => {
  return (
    <div className=" w-full h-[100vh] flex ">
      <section className=" bg-section w-[55%] flex items-center justify-center  ">
        <div className=" max-w-max text-white flex flex-col gap-2 items-start">
          <h1 className="text-3xl font-bold">GoFinance</h1>
          <p>The most popular peer to peer lending at SEA</p>
          <button className="bg-[#0575E6] px-4 py-2 rounded-full ">
            <span className=" font-extralight text-sm">Read More</span>
          </button>
        </div>
      </section>
      <section className="bg-white w-[45%] flex items-center justify-center">
        <div className=" flex flex-col gap-6 px-4 py-4">
          <div>
            <h2 className="font-bold text-2xl">Hello!</h2>
            <p className="text-1xl font-light">Welcome Back</p>
          </div>
          <FormLogin />
        </div>
      </section>
    </div>
  );
};

export default page;
