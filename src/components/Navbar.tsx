import Link from "next/link";
import { TextEffect } from "./TextEffect";

export const Navbar = () => {
  return (
    <nav className="w-[100%] overflow-hidden">
      <div className="bg-[url('../../public/assets/tv-bg.jpg')] rounded-lg bg-contain flex flex-col font-modak text-9xl max-md:text-7xl h-full md:w-[38rem] ">
        <div className="bg-black hover:bg-transparent">
          <Link
            className="-mb-8 text-shadow-lg group rotate-90 m-0 text-white hover:text-black hover:uppercase"
            href="/#about"
          >
            <TextEffect text="about" />
            <h3 className="group-hover:hidden">about</h3>
          </Link>
        </div>
        <div className="h-full w-full bg-black hover:bg-transparent">
          <Link
            className="-mb-8 text-shadow-lg group hover:text-black text-white hover:uppercase"
            href="/#projects"
          >
            <TextEffect text="projects" />
            <h3 className="group-hover:hidden">projects</h3>
          </Link>
        </div>
        <div className="bg-black h-full w-full hover:bg-transparent hover:uppercase">
          <Link
            className="-mb-8 text-shadow-lg group text-white hover:text-black"
            href="/#work"
          >
            <TextEffect text="work" />
            <h3 className="group-hover:hidden">work</h3>
          </Link>
        </div>
        <div className="bg-black h-full w-full hover:bg-transparent hover:uppercase">
          <Link
            className="-mb-8 text-shadow-lg group text-white hover:text-black"
            href="/#contact"
          >
            <TextEffect text="contact" />
            <h3 className="group-hover:hidden">contact</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
};
