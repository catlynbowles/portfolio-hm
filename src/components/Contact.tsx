import Image from "next/image";
import friends from "../../public/assets/friends-logo.svg";
import PageFormat from "@/components/PageFormat";
import Link from "next/link";
import orangeCouch from "../../public/assets/orange-couch.png";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <PageFormat text="let's be" id="contact" className="relative">
      <div className="flex flex-col gap-20 relative justify-center">
        <div>
          <Image
            src={friends}
            alt="friends logo"
            width={500}
            className="-my-32 shrink-0"
          />
        </div>
        <div className="flex items-center justify-center md:flex-row flex-col gap-20 py-4 mt-6">
          <Link href="https://www.linkedin.com/in/catlyn-bowles/">
            <div className="rounded-full bg-red-500 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-100 h-40 w-40 relative">
              <FaLinkedinIn className="absolute top-14 right-14 text-white text-5xl" />
            </div>
          </Link>
          <Link href="https://github.com/catlynbowles">
            <div className="rounded-full bg-blue-400 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100 h-40 w-40 relative">
              <FaGithub className="absolute top-14 right-14 text-white text-5xl" />
            </div>
          </Link>
          <Link href="mailto:catlynbowles@gmail.com">
            <div className="rounded-full  bg-yellow-400 shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-100 h-40 w-40 relative">
              <AiOutlineMail className="absolute top-14 right-14 text-white text-5xl" />
            </div>
          </Link>
        </div>
        <div className="grid justify-center">
          <Image
            src={orangeCouch}
            alt="comfy orange couch"
            height={200}
            className="text-center"
          />
        </div>
      </div>
    </PageFormat>
  );
}
