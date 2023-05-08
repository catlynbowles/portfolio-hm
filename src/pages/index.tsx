import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { LandingPage } from "@/components/LandingPage";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Link from "next/link";
import Image from "next/image";
import troll from "../../public/assets/troll.png";

const inter = Inter({ subsets: ["latin"] });

export const Troll = () => {
  return (
    <Link
      href="/#home"
      className="top-2 right-2 flex flex-row items-center justify-center gap-2 fixed"
    >
      Home
      <Image
        src={troll}
        alt={"90's troll with pink hair!"}
        height={20}
        width={20}
      />
    </Link>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Catlyn Bowles | Front-End Software Engineer</title>
        <meta
          name="description"
          content="I'm a front-end developer with a special interest in web accessibility and contributing to the ability of the web to be diverse and available for people of many backgrounds."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Gideon+Roman&family=Lato:ital,wght@0,400;0,700;1,400&family=Luxurious+Roman&family=Shantell+Sans:wght@300;400;700&display=swap&family=Modak&display=swap&family=Gloria+Hallelujah&family=Fira+Sans:ital,wght@0,300;0,400;1,300;1,400"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/butterflyclip-pink.png" />
      </Head>
      <main className={styles.main}>
        <LandingPage />
        <Link href="/">
          <div className="relative">
            <Troll />
          </div>
        </Link>
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
