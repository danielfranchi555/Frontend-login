import React, { useState } from "react";
import { MenuNav } from "@/components/MenuNav/MenuNav";
import { IoIosArrowDown } from "react-icons/io";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { VscSettings } from "react-icons/vsc";
const NavFilter = () => {
  const [open, setOpen] = useState(false);

  const toogle = () => {
    setOpen(!open);
    console.log(open);
  };
  return (
    <div className="grid grid-cols-2 gap-4  w-full py-4">
      <Select>
        <div onClick={() => toogle()}>
          <SelectTrigger>
            <SelectValue placeholder="Filter" />
            <VscSettings size={25} />
          </SelectTrigger>
        </div>
      </Select>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="By Rating" />
          <IoIosArrowDown size={25} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="apple"> Lowest price</SelectItem>
            <SelectItem value="banana">Highest price</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div
        className={`fixed top-[60px] right-0 h-full w-full px-6 bg-white flex flex-col items-center gap-20 transition-transform ease-in duration-600  ${
          open ? "transform translate-x-0 " : "transform translate-x-full"
        }`}
      >
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Brands</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Apple
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="ds" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Samsung
                  </label>
                </div>{" "}
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Xiaomi
                  </label>
                </div>{" "}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <button
          onClick={() => toogle()}
          className="bg-black py-4 px-6 text-white w-full rounded-md "
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default NavFilter;
