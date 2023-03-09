import digitalPet from "../../public/assets/digital-pet.png";
import paperHand from "../../public/assets/paper-hand-game.png";
import candyBracelet from "../../public/assets/candy-bracelet.png";
import gum from "../../public/assets/hubbo-gum.png";
import gameboy from "../../public/assets/gameboy.png";
import walkman from "../../public/assets/walkman.png";
import Image from "next/image";

export const ImageLineup = () => {
  return (
    <div className="absolute w-full gap-10 bottom-0 left-[20%] items-center hidden lg:flex">
      <Image
        src={digitalPet}
        height={60}
        width={60}
        alt="90's tamagochi"
        className="hover:-rotate-45"
      />
      <p className="">►</p>
      <Image
        src={candyBracelet}
        height={60}
        width={60}
        alt="candy bracelet"
        className="hover:rotate-45"
      />
      <p className="">Ⅱ</p>
      <Image
        src={walkman}
        height={60}
        width={60}
        alt="90's walkman"
        className="hover:rotate-45"
      />
      <p>≫</p>
      <Image
        src={gum}
        height={60}
        width={60}
        alt="90's pink bubblegum tape"
        className="hover:-rotate-45"
      />
      <p>≪</p>
      <Image
        src={gameboy}
        height={60}
        width={60}
        alt="90's gameboy"
        className="hover:rotate-45"
      />
      <p className="text-red-500">●</p>
      <Image
        src={paperHand}
        height={60}
        width={60}
        alt="90's paper machete hand game"
        className="hover:-rotate-45"
      />
    </div>
  );
};
