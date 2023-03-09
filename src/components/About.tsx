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
          width={500}
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
          <div className="border shadow-md shadow-teal-300 border-purple-900 bg-white w-[80%] md:w-[50%]">
            <p className="font-fira">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ip 
            </p>
          </div>
          {/* </div> */}
        </div>
        <Image
          src={vibewave}
          alt="vibewave"
          height={100}
          width={500}
          className="absolute -z-10 right-0 bottom-10"
        />
      </div>
    </PageFormat>
  );
}
