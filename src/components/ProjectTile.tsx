import Link from "next/link";

type ProjectTile = {
  title: string;
  description: string;
  link: string;
};

export const ProjectTile = ({ title, description, link }: ProjectTile) => {
  return (
    <div className="border w-[30%] min-h-fit flex flex-col items-center relative gap-8 font-fira">
      <div className="border">
        <h4 className="m-3 text-lg font-bold">{title}</h4>
      </div>
      <p>&emsp; {description}</p>
      <Link href={link} className="underline">
        Deployed
      </Link>
    </div>
  );
};
