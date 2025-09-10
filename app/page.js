'use client'
import Navbar from "@/components/Navbar";
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
    </>
  );
}