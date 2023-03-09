import Link from "next/link";

type ProjectTile = {
  title: string;
  description: string;
  link: string;
  borderColor: string;
};

export const ProjectTile = ({
  title,
  description,
  link,
  borderColor,
}: ProjectTile) => {
  return (
    <div
      className={`border ${borderColor} w-[30%] min-h-fit flex flex-col items-center relative gap-8 font-fira h-[80%] rounded-lg`}
    >
      <div className="m-5  text-gray-800">
        <h4 className="font-modak text-3xl">{title}</h4>
        <p>&emsp; {description}</p>
      </div>
      <div className="flex flex-col items-center gap-4">
        ✨
        <Link href={link} className="underline">
          Deployed
        </Link>
        <Link href={link} className="underline">
          Repo
        </Link>
        ✨
      </div>
    </div>
  );
};
