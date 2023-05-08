import PageFormat from "@/components/PageFormat";
import { ProjectTile } from "./ProjectTile";
import { ImageLineup } from "./ImageLineup";

export default function Projects() {
  return (
    <PageFormat text="what I'm up to" id="projects">
      <div className="flex flex-col md:flex-row gap-x-10 gap-y-6 md:justify-center relative lg:h-[80%] h-full">
        <ProjectTile
          title="GoNoodle Universe"
          description="
            An application geared at promoting mental and physical health 
            for children through educative technology. Within a team, developed and 
            designed the Universe Platform, focused on promoting greater user engagement
            through progress bars, new characters, and an updated thematic layout. Built in React, 
            styled with Tailwind, data managed by SQL & Ruby on Rails."
          link="https://www.gonoodle.com/"
          repoLink={null}
          borderColor="border-pink-500"
        />
        <ProjectTile
          title="Roe'd to Aid"
          description="An educational website focused on informing users of authorized abortion clinics, exposing misinformation centers, and highlighting state policies and resources. Took on a special role within a team of seven to build the educational state policies view.
          Built with React, styled in scss, tested in Cypress, data pulled from Apollo GraphQL, and continuous integration with Circle CI."
          link="http://roed-to-aid.herokuapp.com/"
          borderColor="border-yellow-500"
          repoLink={"https://github.com/Roe-dToAid/roed_to_aid_fe"}
        />
        <ProjectTile
          title="Vibecheck"
          description="A mindfulness application with the goal of helping people feel less alone. A user can select a feeling, then view pictures and images connected to tweets of those who reported feeling the same. Solo project that I desgined, conceptualized and built in Typescript, Next.js, and Tailwind, deployed on Vercel."
          link="https://portfolio-hm-ten.vercel.app/"
          borderColor="border-teal-500"
          repoLink={"https://github.com/catlynbowles/portfolio-hm"}
        />
        <ImageLineup />
      </div>
    </PageFormat>
  );
}
