import PageFormat from "@/components/PageFormat";
import { ProjectTile } from "./ProjectTile";
import digitalPet from "../../public/assets/digital-pet.png";
import paperHand from "../../public/assets/paper-hand-game.png";
import candyBracelet from "../../public/assets/candy-bracelet.png";
import gum from "../../public/assets/hubbo-gum.png";
import gameboy from "../../public/assets/gameboy.png";
import walkman from "../../public/assets/walkman.png";
import Image from "next/image";
import { ImageLineup } from "./ImageLineup";

export default function Projects() {
  return (
    <PageFormat text="what I'm up to" id="projects">
      <div className="flex flex-col md:flex-row gap-x-10 md:gap-y-0 gap-y-6  justify-center relative">
        <ProjectTile
          title="GoNoodle Universe"
          description=" Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab"
          link="/"
          borderColor="border-pink-500"
        />
        <ProjectTile
          title="Roe'd to Aide"
          description=" Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab"
          link="/"
          borderColor="border-teal-500"
        />
        <ProjectTile
          title="Write the Stars"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab"
          link="/"
          borderColor="border-yellow-500"
        />
        <ImageLineup />
      </div>
    </PageFormat>
  );
}
