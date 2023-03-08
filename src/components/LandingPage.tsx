import { Intro } from "./Intro";
import { Navbar } from "./Navbar";
import Image from "next/image";
import catwalk from "../../public/assets/catwalk.gif";

export const LandingPage = () => {
  return (
    <section className="h-full">
      <div>
        <Image
          src={catwalk}
          alt="my gif"
          height={300}
          width={300}
          className="animate-in slide-in-from-left ease-in delay-300"
        />
      </div>
      <div className="flex items-center justify-evenly">
        <div>
          <Intro />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      <h3 className="absolute bottom-0 left-0 font-friends">SCROLL</h3>
    </section>
  );
};
