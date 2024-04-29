import { Fjalla_One } from "next/font/google";
import { data } from "../../app/projectData";

const fjallaOne = Fjalla_One({ weight: "400", subsets: ["latin"] });

interface HeaderProps {
  path?: string;
}

const Header = ({ path }: HeaderProps) => {
  const projectData = data.find((project) => project.path === path);
  const headerTitle = projectData?.title || "Project Title";
  const headerDescription =
    projectData?.description || "Some description text here";
  const tags = projectData?.tags;

  return (
    <header className="flex flex-col mx-8 my-4 md:mx-16 md:my-8">
      <h1 className={`${fjallaOne.className} text-[48px] font-semibold`}>
        {headerTitle}
      </h1>
      <p className={`${fjallaOne.className} text-[32px]`}>
        {headerDescription}
      </p>
      <div className="flex flex-row my-8">
        {tags?.map((tag) => (
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
