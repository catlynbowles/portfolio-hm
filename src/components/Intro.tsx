import leopardHeart from "../../public/assets/leapord-heart.svg";
import Image from "next/image";

export const Intro = () => {
  return (
    <div className="bg-[url('../../public/assets/static.gif')] bg-contain w-[100%] h-[100%] py-2 pl-2 max-md:px-2">
      <div className="font-fira flex flex-col items-center text-md justify-center gap-12 max-sm:gap-2 bg-white p-10">
        <div className="flex flex-col justify-center items-center">
          <h1>
            <em>hi, i&apos;m catlyn</em>
          </h1>
          <p>front-end software engineer</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p>
            <em>and enthusiast of</em>
          </p>
          <ul className="flex justify-center gap-3 items-center w-full max-sm:flex-col max-sm:gap-0 whitespace-nowrap">
            <li>~ matcha</li>
            <li>~ taylor swift</li>
            <li>~ horses</li>
            <li>~ web accessibility</li>
          </ul>
          <p>~ also the 90's</p>
          <Image
            src={leopardHeart}
            alt="my gif"
            height={50}
            width={50}
            className="p-2"
          />
        </div>
        <div>
          <p>you can call me 🐈‍⬛</p>
        </div>
      </div>
    </div>
  );
};
