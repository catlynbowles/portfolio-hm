import PageFormat from "@/components/PageFormat";
import mee from "../../public/assets/mee.jpg";
import Image from "next/image";
import vibewave from "../../public/assets/vibewave.png";

export default function About() {
  return (
    <PageFormat text="get to know me" id="about">
      <div className="flex relative h-full w-full">
        <Image
          src={vibewave}
          alt="vibewave"
          height={100}
          width={600}
          className="rotate-180 absolute -z-10 left-0"
        />
        <div className="flex items-center gap-y-7 flex-col justify-start w-full -mt-7">
          <div className="shadow-md rounded-full bg-contain shadow-purple-900 border-teal-300 h-fit w-fit">
            <Image
              src={mee}
              height={320}
              alt="catlyn bowles headshot"
              className="rounded-full"
            />
          </div>
          {/* <div className="relative"> */}
          <div className="font-fira border shadow-md shadow-teal-300 border-purple-900 bg-white w-[80%] md:w-[50%]">
            <p className="m-5 line-clamp-8 hover:line-clamp-none">
              As a massage therapist turned software engineer, I'm a curious
              problem solver with core values grounded in empathy, service, and
              meaningful work. I care deeply about creating aesthetically
              pleasing, welcoming, and effective software that is inclusive to a
              wide population of users. Currently I am completing an Engineering
              Apprenticeship at Upstatement, where I am working on building
              educational tools that can be used to promote physical and
              emotional awareness in the classroom. I am actively looking for my
              next role, where I hope to implement my general enthusiasm and
              passion for this industry to good use.
            </p>
          </div>
          {/* </div> */}
        </div>
        <Image
          src={vibewave}
          alt="vibewave"
          height={100}
          width={600}
          className="absolute -z-10 right-0 top-10"
        />
      </div>
    </PageFormat>
  );
}
