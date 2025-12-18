import LogoScene from "@/components/LogoScene";
import Image from "next/image";
import CasgrownHero from "./styles/CasgrownHero";
import ServicesPage from "./styles/ServicePage";


export default function Home() {
  return (
    <div>

      <LogoScene />
      <CasgrownHero />
      <ServicesPage />

    </div>
  );
}
