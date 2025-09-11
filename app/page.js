'use client'
import About from "@/components/About";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import { Ovo, Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"]
});

export default function Home() {
  return (
    <>
      <Navbar ovoClass={ovo.className} outfitClass={outfit.className} />
      <Header ovoClass={ovo.className} />
      <About ovoClass={ovo.className} />
      <Services ovoClass={ovo.className} />
    </>
  );
}