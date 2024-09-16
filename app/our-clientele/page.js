import Head from "next/head";
import Header from "@/components/Header/Header";
import SectionFive from "@/components/Landing Page/S05/SectionFive";
import Footer from "@/components/Footer/Footer";
import Section01 from "@/components/Clients/S01/S01";
import Section02 from "@/components/Clients/S02/S02";


export default function Clients() {
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
