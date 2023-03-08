import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { LandingPage } from "@/components/LandingPage";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

const inter = Inter({ subsets: ["latin"] });

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
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <main className={styles.main}>
        <LandingPage />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
