import { Intro } from "./Intro";
import { Navbar } from "./Navbar";
import Image from "next/image";
import catwalk from "../../public/assets/catwalk.gif";

export const LandingPage = () => {
  return (
    <section>
      <div>
        <Image src={catwalk} alt="my gif" height={300} width={300} />
      </div>
      <div className="w-full h-full flex items-center justify-evenly">
        <div className="">
          <Intro />
        </div>
        <div className="">
          <Navbar />
        </div>
      </div>
    </section>
  );
};
