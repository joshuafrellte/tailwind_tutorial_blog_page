import Image from "next/image";
import TailwindLogo from "../public/Tailwind_CSS_Logo.png"
import Navbar from "./components/layout/Navbar"
import HeroSection from "./components/sections/HeroSection"
import SetupSection from "./components/sections/SetupSection"
import Footer from "./components/layout/Footer"
import UtilityClassesSection from "./components/sections/UtilityClassSection";
import LayoutSection from "./components/sections/LayoutSection"
import ResponsiveDesignSection from "./components/sections/ResponsiveDesignSection";
import WrapUpSection from "./components/sections/WrapUpSection"
import Separator from "./components/ui/Separator";

export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <main className=" bg-blue-100 text-blue-950 px-6 p-6 sm:px-16 md:px-28 lg:px-48 xl:px-64 ">
        <SetupSection/>
        <Separator/>
        <UtilityClassesSection/>
        <Separator/>
        <LayoutSection/>
        <Separator/>
        <ResponsiveDesignSection/>
        <Separator/>
        <WrapUpSection/>
      </main>
      <Footer/>
    </>
  );
}
