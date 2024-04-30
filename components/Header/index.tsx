import { data } from "../../app/projectData";
import { fjalla_one } from "../../app/fonts";

interface HeaderProps {
  path?: string;
}

const Header = ({ path }: HeaderProps) => {
  const projectData = data.find((project) => project.path === path);

  return (
    <header className="flex flex-col mx-8 my-4 md:mx-16 md:my-8">
      <h1>{projectData!.title}</h1>
      <h2>{projectData!.description}</h2>
      <div className="flex flex-row my-8">
        {projectData!.tags.map((tag) => (
          <Tag key={tag} title={tag} />
        ))}
      </div>
    </header>
  );
};

const Tag = ({ title }: { title: string }) => (
  <div className="border-2 border-solid rounded-lg px-8 py-2 mr-4">
    <p className="text-[13px]">{title}</p>
  </div>
);

export default Header;
