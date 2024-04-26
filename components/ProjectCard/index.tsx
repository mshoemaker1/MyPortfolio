import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: StaticImageData;
  bg: string;
}

const ProjectCard = ({ title, description, image, bg }: ProjectCardProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center p-8 my-2 md:m-4 md:rounded-lg shadow-lg ${bg} text-indigo-800`}
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
    </div>
  );
};

export default ProjectCard;
