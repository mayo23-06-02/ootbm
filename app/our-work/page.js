import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header/Header";

import SectionFive from "@/components/Landing Page/S05/SectionFive";
import Footer from "@/components/Footer/Footer";
import Section01 from "@/components/Our Work/S01/Section01";
import Section02 from "@/components/Our Work/S02/Section02";
import Section04 from "@/components/About Us/S04/Section04";

export default function OurWork() {
    return (
        <div className="relative max-w-[1920px] mx-auto">
            <Head>
                <title>OOTBM</title>
                <meta charSet="utf-8" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <main className="">
                <div>
                    <Header />
                </div>
                <div>
                    <Section01 />
                    <Section02 />
                    <div className=" pt-10 flex flex-col items-center">
                        <Section04 />
                    </div>
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
