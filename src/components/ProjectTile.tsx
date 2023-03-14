import Link from "next/link";

type ProjectTile = {
  title: string;
  description: string;
  link: null | string;
  borderColor: string;
  repoLink: null | string;
};

export const ProjectTile = ({
  title,
  description,
  link,
  borderColor,
  repoLink,
}: ProjectTile) => {
  return (
    <div
      className={`border ${borderColor} md:w-[30%] flex flex-col items-center relative font-fira h-[25%] sm:h-[80%] rounded-lg hover:scale-105 shadow shadow-gray-400`}
    >
      <div className="m-10 text-gray-800">
        <h4 className="font-modak text-3xl m-3">{title}</h4>
        <p className="hidden md:block">&emsp; {description}</p>
      </div>
      <div className="flex items-center lg:gap-4">
        ✨
        {link && (
          <Link href={link} className="underline">
            Deployed
          </Link>
        )}
        {repoLink && (
          <Link href={repoLink} className="underline hidden md:block">
            Repository
          </Link>
        )}
        ✨
      </div>
    </div>
  );
};
