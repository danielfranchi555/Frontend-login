"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
export const MenuNav = () => {
  const [brands, setBrands] = useState([]);
  const [categoryBrand, setCategoryBrand] = useState(new Map());

  const getCategory = async () => {
    const resp = await fetch(`http://localhost:3001/api/products/categoryHome`);
    const data = await resp.json();
    const brands = [];
    data.map(({ name_categorie, name_brand }) => {
      if (!categoryBrand.has(name_categorie)) {
        categoryBrand.set(name_categorie, new Set());
      }
      categoryBrand.get(name_categorie).add(name_brand);
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  const brandsCategorie = Array.from(categoryBrand.entries());
  console.log(
    brandsCategorie.map(
      ([category, brandsArray]) => ({ category }, { brandsArray })
    )
  );
  return (
    <div className="flex gap-10 ">
      {Array.from(categoryBrand.entries()).map(([category, brandsArray]) => (
        <Select key={category}>
          <SelectTrigger className="w-[180px]">{category}</SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Array.from(brandsArray).map((brand) => (
                <SelectItem value={brand}>{brand}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      ))}
    </div>
  );
};
