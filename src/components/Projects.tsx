import PageFormat from "@/components/PageFormat";
import { ProjectTile } from "./ProjectTile";
import digitalPet from "../../public/assets/digital-pet.png";
import Image from "next/image";

export default function Projects() {
  return (
    <PageFormat text="what I'm up to" id="projects">
      <div className="flex flex-row gap-x-10 justify-center h-[80%]">
        <ProjectTile
          title="GoNoodle Universe"
          description=" Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab"
          link="/"
        />
        <Image src={digitalPet} height={20} width={20} alt="90's tamagochi" className="absolute"/>
        <ProjectTile
          title="Roe'd to Aide"
          description=" Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab"
          link="/"
        />
        <ProjectTile
          title="Write the Stars"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab"
          link="/"
        />
      </div>
    </PageFormat>
  );
}
