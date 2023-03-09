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
      className={`border ${borderColor} md:w-[30%] flex flex-col items-center relative font-fira h-[80%] rounded-lg hover:scale-105 shadow shadow-gray-400`}
    >
      <div className="m-5 text-gray-800">
        <h4 className="font-modak text-3xl">{title}</h4>
        <p className="hidden md:block">&emsp; {description}</p>
      </div>
      <div className="flex items-center lg:gap-4">
        ✨
        <Link href={link} className="underline">
          Deployed
        </Link>
        ✨
        <Link href={link} className="underline hidden md:block">
          Repo
        </Link>
        ✨
      </div>
    </div>
  );
};
