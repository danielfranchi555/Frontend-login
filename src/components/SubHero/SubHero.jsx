import React from "react";
import tablet from "../../images/tablet-2.png";
import airpods from "../../images/airpods-original.png";
import phone from "../../images/samsung-23.png";
import mac from "../../images/mac-original.png";

import Image from "next/image";

export const SubHero = () => {
  return (
    <div className="bg-slate-800 w-full h-full flex flex-col md:grid md:grid-cols-2">
      <section className="bg-red-500 flex flex-col">
        <div className="bg-white py-2 flex flex-col justify-center items-center w-full md:flex md:flex-row   ">
          <div className="md:w-[40%]">
            <Image
              src={tablet}
              width={"auto"}
              height={"auto"}
              alt="img"
              className="w-[200px] md:w-[250px]"
            />
          </div>
          <div className="flex flex-col md:flex md:items-start px-4 gap-2 md:w-[60%]">
            <h3 className="text-center text-3xl lg:text-5xl">Table Pad 6</h3>
            <p className="text-center text-[#909090] px-2 py-0 text-[15px] md:text-start md:text-[14px] lg:text-[15px]">
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex md:flex-row w-full">
          <div className="bg-[#EDEDED] py-6 w-full flex flex-col gap-4 justify-center items-center md:flex md:flex-row md:w-[50%] md:relative">
            <div>
              <Image
                src={airpods}
                width={"auto"}
                height={"auto"}
                alt="image"
                className="w-[250px] md:w-[460px]"
              />
            </div>
            <div className="flex flex-col gap-2 md:px-4  ">
              <p className="text-center  font-extralight text-3xl md:text-start lg:text-3xl">
                Apple AirPods <span className="font-semibold">Max</span>
              </p>
              <p className="text-center text-[#909090]  text-[15px] md:text-start md:text-[14px] lg:text-[15px]">
                Computational audio. Listen, it's powerful
              </p>
            </div>
          </div>
          <div className="bg-[#353535] w-full  flex flex-col items-center justify-center py-4 md:w-[50%] md:flex md:flex-row ">
            <div>
              <Image
                src={phone}
                width={"auto"}
                height={"auto"}
                className="w-[250px] md:w-[350px]"
                alt="image"
              />
            </div>
            <div className="px-2 flex flex-col gap-2">
              <p className="text-center text-white  font-extralight text-3xl md:text-start lg:text-3xl">
                Samsung <span className="font-semibold">s23</span>
              </p>
              <p className="text-center text-[#909090]  text-[15px] md:text-start md:text-[14px] lg:text-[15px]">
                An immersive way to experience entertainment
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#EDEDED] flex flex-col justify-center items-center py-4 w-full h-full md:relative md:overflow-hidden">
        <Image
          src={mac}
          width={"auto"}
          height={"auto"}
          alt="image"
          className="absolute top-[-10] md:right-[-290px] lg:right-[-430px] md:w-[500px] lg:w-[800px]  hidden md:block"
        />
        <Image
          src={mac}
          width={"auto"}
          height={"auto"}
          alt="image"
          className="w-[250px] md:hidden"
        />
        <div className="flex flex-col items-center gap-2 justify-center px-2 md:text-start md:flex md:flex-col md:justify-start md:items-start md:w-full md:gap-4 md:px-6">
          <h3 className="text-center text-3xl gap-4 md:text-start lg:text-6xl font-extralight  w-full">
            Macbook <span className="font-semibold">Air</span>
          </h3>
          <p className="text-center text-[#909090] text-[15px] md:text-start md:text-[14px] lg:text-[15px] md:max-w-[300px] lg:max-w-[400px]">
            The new 15‑inch MacBook Air makes room for more of what you love
            with a spacious Liquid Retina display.
          </p>
          <button className="border border-black px-6 py-2 rounded-md md:px-10 md:py-4 lg:px-12 lg:py-4">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};
