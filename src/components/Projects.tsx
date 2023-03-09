import PageFormat from "@/components/PageFormat";
import { ProjectTile } from "./ProjectTile";
import { ImageLineup } from "./ImageLineup";

export default function Projects() {
  return (
    <PageFormat text="what I'm up to" id="projects">
      <div className="flex flex-col md:flex-row gap-x-10 gap-y-6 md:justify-center relative lg:h-[80%] h-full">
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
