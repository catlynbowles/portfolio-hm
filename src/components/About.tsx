import PageFormat from "@/components/PageFormat";
import mee from "../../public/assets/mee.jpg";
import Image from "next/image";
import vibewave from "../../public/assets/vibewave.png";

export default function About() {
  return (
    <PageFormat text="get to know me" id="about">
      <div className="flex justify-center relative">
        <Image
          src={vibewave}
          alt="vibewave"
          height={100}
          width={500}
          className="rotate-180 absolute -z-10 left-0"
        />
        <div className="shadow-md rounded-full bg-contain shadow-purple-900 border-teal-300 h-full ml-20">
          <Image
            src={mee}
            height={320}
            alt="catlyn bowles headshot"
            className="rounded-full"
          />
        </div>
        <div className="rounded-full border h-[35rem] w-[35rem] relative shadow-md shadow-teal-300 border-purple-900 bg-white">
          <p className="absolute top-40 mx-6 font-fira">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab
          </p>
        </div>
        <Image
          src={vibewave}
          alt="vibewave"
          height={100}
          width={500}
          className="absolute -z-10 right-0 bottom-2"
        />
      </div>
    </PageFormat>
  );
}
