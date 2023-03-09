import PageFormat from "@/components/PageFormat";
import mee from "../../public/assets/mee.jpg";
import Image from "next/image";
import vibewave from "../../public/assets/vibewave.png";

export default function About() {
  return (
    <PageFormat text="get to know me" id="about">
      <div className="flex justify-center relative h-full w-full">
        <Image
          src={vibewave}
          alt="vibewave"
          height={100}
          width={500}
          className="rotate-180 absolute -z-10 left-0"
        />
        <div className="shadow-md rounded-full bg-contain shadow-purple-900 border-teal-300 ml-20 h-fit ">
          <Image
            src={mee}
            height={320}
            alt="catlyn bowles headshot"
            className="rounded-full"
          />
        </div>
        <div className="h-[85%] w-[42%]">
          <div className="rounded-full border relative shadow-md shadow-teal-300 border-purple-900 bg-white h-full w-full">
            <p className="absolute top-60 mx-10 font-fira">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab
            </p>
          </div>
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
