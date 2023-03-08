import Link from 'next/link'

type ProjectDetailProps = {
  projectTitle: string;
  projectDescription: string;
  projectUrl: string
};

export const ProjectDetail = ({
  projectTitle,
  projectDescription,
  projectUrl
}: ProjectDetailProps) => {
  return (
    <div>
      <h3>{projectTitle}</h3>
      <p>{projectDescription}</p>
      <Link href={projectUrl}></Link>
    </div>
  );
};
