import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header/Header";
import SectionOne from "@/components/Landing Page/S01/SectionOne";
import BG from '../assets/images/lp.gif';
import BG_SM from '../assets/images/lpsm1.gif';
import SectionTwo from "@/components/Landing Page/S02/SectionTwo";
import SectionThree from "@/components/Landing Page/S03/SectionThree";
import SectionFour from "@/components/Landing Page/S04/SectionFour";
import SectionFive from "@/components/Landing Page/S05/SectionFive";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className="relative max-w-[1920px] mx-auto">
      <Head>
        <title>Home</title>
        <meta charSet="utf-8" />
        <link rel="icon" href="/logo.ico" />
      </Head>
      <main className="">
        <div>
          <Header />
        </div>
        <div>
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionFour />
          <SectionFive />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
      <span className="absolute top-0 -z-10 opacity-60">
        <Image src={BG} alt="BG" width={2500} height={2080} className="hidden lg:inline opacity0"/>
        <Image src={BG_SM} alt="BG" width={2000} height={1380} className="lg:hidden"/>

      </span>
    </div>
  );
}
