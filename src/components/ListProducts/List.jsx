import Image from "next/image";
import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@radix-ui/react-separator";
import { deleteProduct } from "@/app/redux/features/cartSlice";

const List = ({ products }) => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <ScrollArea className="h-[450px] md:h-[530px] w-full rounded-md flex flex-col">
      {products.map((prod) => (
        <>
          <div className="flex ">
            <div className=" h-auto">
              <Image
                className="md:max-w[200px]  "
                width={100}
                height={100}
                src={prod.image}
              />
            </div>
            <div className="flex flex-col justify-between  w-[200px]">
              <div>
                <p className="md:text-[15px] text-[12px] text-start">
                  {prod.name}
                </p>
                <p className="text-[12px] text-start">Quantity: {prod.count}</p>
              </div>
              <p className="text-start pb-2 font-semibold text-[12px]">
                ${prod.price * prod.count}
              </p>
            </div>
            <div className=" w-[80px flex flex-col  justify-between pr-4">
              <div className="h-full flex items-center justify-center py-2">
                <MdDelete
                  size={20}
                  className="cursor-pointer"
                  onClick={() => dispatch(deleteProduct(prod))}
                />
              </div>
              <div className=" py-2 border  flex gap-2">
                <span
                  onClick={() => dispatch(handleIncrement(prod))}
                  className="px-2 py-1 text-slate-500 text-[19px] bg-white"
                >
                  +
                </span>
                <span className=" items-center flex justify-center">
                  {count}
                </span>
                <span
                  onClick={() => dispatch(handleDecrement())}
                  className="px-2 py-1 text-slate-500 text-[19px] bg-white"
                >
                  -
                </span>
              </div>
            </div>
          </div>

          <Separator className="my-2" />
        </>
      ))}
      <ScrollBar orientation="vertical px-2 " />
    </ScrollArea>
  );
};

export default List;
