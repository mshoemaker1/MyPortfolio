import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  bg: string;
  path: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  bg,
  path,
}: ProjectCardProps) => {
  return (
    <Link
      href={path}
      className={`flex flex-col items-center justify-center p-8 my-2 md:m-4 md:rounded-lg shadow-lg ${bg} text-black hover:opacity-80 transition duration-300 ease-in-out`}
    >
      <div className="flex flex-col justify-start w-full mb-6">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description}</p>
      </div>
      <Image
        src={image}
        alt={title}
        className="w-96 h-96 object-cover"
        width={400}
        height={400}
      />
    </Link>
  );
};

export default ProjectCard;
