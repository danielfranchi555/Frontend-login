import FormLogin from "@/components/FormAuth/FormLogin";
import FormSingUp from "@/components/FormSingUp/FormSingUp";
import Hero from "@/components/Hero/Hero";
import { SubHero } from "@/components/SubHero/SubHero";
export default function Home() {
  return (
    <div className=" w-full">
      <Hero />
      <SubHero />
    </div>
  );
}
