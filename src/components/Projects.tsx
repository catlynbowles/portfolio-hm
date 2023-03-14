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
          title="Write the Stars"
          description="(What I'm currently working on!) This is a practice project I'm creating to learn Firebase. A user logs in, and takes various questions to see if they can match their day to their predicted daily horoscope -- stay tuned for more!
          Being built in Typescript, styled in Tailwind, using Firebase as data source."
          link={null}
          borderColor="border-teal-500"
          repoLink={"https://github.com/catlynbowles/write-the-stars"}
        />
        <ImageLineup />
      </div>
    </PageFormat>
  );
}
