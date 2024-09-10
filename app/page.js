import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header/Header";
import SectionOne from "@/components/Landing Page/S01/SectionOne";
import BG from '../assets/images/BG Tiles.png';
import BG_SM from '../assets/images/BG Tiles SM.png';
import SectionTwo from "@/components/Landing Page/S02/SectionTwo";
import SectionThree from "@/components/Landing Page/S03/SectionThree";

export default function Home() {
  return (
    <div className="relative max-w-[1920px] mx-auto">
      <Head>
        <title>Home</title>
        <meta charSet="utf-8" />
      </Head>
      <main className="">
        <div>
          <Header />
        </div>
        <div>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
        </div>
      </main>
      <span className="absolute top-0 -z-10">
        <Image src={BG} alt="BG" width={1000} height={1080} className="hidden lg:inline"/>
        <Image src={BG_SM} alt="BG" width={1000} height={1080} className="lg:hidden"/>

      </span>
    </div>
  );
}
