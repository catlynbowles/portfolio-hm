import leopardHeart from "../../public/assets/leapord-heart.svg";
import Image from "next/image";
export const Intro = () => {
  return (
    <div className="font-fira flex flex-col items-center text-md">
      <h1>
        <em>hi, i'm catlyn</em>
      </h1>
      <p>front-end software engineer</p>
      <p className="mt-4 flex">
        <em>and enthusiast of</em>
      </p>
      <ul className="flex justify-center gap-4 items-center">
        <li>matcha</li>
        <li>taylor swift</li>
        <li>horses</li>
        <li>web accessibility</li>
      </ul>
      <Image
        src={leopardHeart}
        alt="my gif"
        height={50}
        width={50}
        className="p-2"
      />
      <p>~ 90's bb ~</p>
      <p className="mt-4">you can call me 🐈‍⬛</p>
    </div>
  );
};
