import { Intro } from "./Intro";
import { Navbar } from "./Navbar";

export const LandingPage = () => {
  return (
    <section className="w-full h-full flex items-center justify-evenly">
      <div className="">
        <Intro />
      </div>
      <div className="">
        <Navbar />
      </div>
    </section>
  );
};
