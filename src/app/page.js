import Categories from "@/components/Categories/Categories";
import Hero from "@/components/Hero/Hero";
import ListProducts from "@/components/ListProducts/ListProducts";
import { SubHero } from "@/components/SubHero/SubHero";
import getProducts from "./api";

export default async function Home() {
  const products = await getProducts();
  console.log({ products: products });
  return (
    <div className=" w-full">
      <Hero />
      <SubHero />
      <Categories />
      <ListProducts products={products} />
    </div>
  );
}
