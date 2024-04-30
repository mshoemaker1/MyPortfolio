import { data } from "../../projectData";
import Header from "../../../components/Header";
import Image from "next/image";
import ProjectHero from "@/components/ProjectHero";

const projectData = data.find(
  (project) => project.path === "/projects/trapped-downtown"
);
const hero = projectData!.hero;

export default function TrappedDowntown() {
  return (
    <main>
      <Header path={projectData!.path} />
      <div className="flex flex-col">
        <Image
          className="w-full"
          src={hero.image}
          alt="Hands holding a phone"
        />
        <ProjectHero bulletPoints={hero.bulletPoints} content={hero.content} />
      </div>
    </main>
  );
}
