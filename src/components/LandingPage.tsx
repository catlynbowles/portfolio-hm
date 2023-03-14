import { Intro } from "./Intro";
import { Navbar } from "./Navbar";
import Link from "next/link";
import Image from "next/image";
import catwalk from "../../public/assets/catwalk.gif";
import troll from "../../public/assets/troll.png";

export const LandingPage = () => {
  return (
    <section
      className="h-full flex justify-center relative w-full animate-in"
      id="home"
    >
      <div className="absolute">
        <Image
          src={catwalk}
          alt="my gif"
          height={300}
          width={300}
          className="animate-marquee-slower transition duration-00 -left-13 -top-2 -z-10"
        />
      </div>
      <div className="flex items-center justify-center flex-col md:flex-row gap-4 w-full">
        <div>
          <Intro />
        </div>
        <div className="flex items-center justify-center">
          <Navbar />
        </div>
      </div>
      <Link
        href="/#about"
        className="absolute bottom-2 left-2 flex flex-row items-center justify-center gap-2"
      >
        <Image
          src={troll}
          alt={"90's troll with pink hair!"}
          className="rotate-180"
          height={20}
          width={20}
        />
      </Link>
    </section>
  );
};
