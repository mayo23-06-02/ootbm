import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header/Header";
import BG from '../../assets/images/lp.gif';
import BG_SM from '../../assets/images/lpsm1.gif';
import SectionFive from "@/components/Landing Page/S05/SectionFive";
import Footer from "@/components/Footer/Footer";
import Section01 from "@/components/About Us/S01/Section01";
import Section02 from "@/components/About Us/S02/Section02";
import Section03 from "@/components/About Us/S03/Section03";
import Section04 from "@/components/About Us/S04/Section04";

export default function AboutUs() {
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
                    <Section01 />
                    <Section02 />
                    <Section03 />
                    <Section04 />
                    <div className="pt-24 lg:pt-0">
                        <SectionFive />
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
            <span className="absolute top-0 -z-10 opacity-60">

            </span>
        </div>
    );
}
